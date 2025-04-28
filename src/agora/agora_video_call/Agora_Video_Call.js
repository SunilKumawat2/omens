import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AgoraRTC from "agora-rtc-sdk-ng";
import { AGORA_APP_ID, IMG_BASE_URL } from "../../config/Config";
import { Call_Store } from "../../api/agora/Agora";
import { User_Authentication } from "../../user_authentication/User_Authentication";

const Agora_Video_Call = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [client, setClient] = useState(null);
  const [localVideoTrack, setLocalVideoTrack] = useState(null);
  const [localAudioTrack, setLocalAudioTrack] = useState(null);
  const [remoteUsers, setRemoteUsers] = useState([]);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [callDuration, setCallDuration] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);
  const [callStartTime, setCallStartTime] = useState(null);

  // Agora Credentials
  const appid = "a0d5f8d66e014624ad5d695deb8fb69c"; // Replace with your Agora App ID
  const channel = localStorage.getItem("channel");
  const sender_id = localStorage.getItem("sender_id");
  const sender_token = localStorage.getItem("sender_token");

  useEffect(() => {
    if (!client) {
      const rtcClient = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
      setClient(rtcClient);
    }
  }, [client]);

  useEffect(() => {
    if (!client || !channel || !sender_token || !sender_id) return;

    const startCall = async () => {
      try {
        // Join the Agora channel
        await client.join(appid, channel, sender_token, sender_id);
        setCallStartTime(new Date().toISOString());

        // Create local audio and video tracks
        const audioTrack = await AgoraRTC.createMicrophoneAudioTrack();
        const videoTrack = await AgoraRTC.createCameraVideoTrack();

        // Set tracks to state
        setLocalAudioTrack(audioTrack);
        setLocalVideoTrack(videoTrack);

        // Play local video
        videoTrack.play("local-video");

        // Publish tracks to the channel
        await client.publish([audioTrack, videoTrack]);

        // Handle remote users
        client.on("user-published", async (user, mediaType) => {
          await client.subscribe(user, mediaType);
          if (mediaType === "video") {
            user.videoTrack.play(`remote-video-${user.uid}`);
          }
          if (mediaType === "audio") {
            user.audioTrack.play();
          }
          setRemoteUsers((prevUsers) => [...prevUsers, user]);
          if (!timerInterval) {
            const interval = setInterval(() => setCallDuration((prev) => prev + 1), 1000);
            setTimerInterval(interval);
          }
        });

        // Handle remote user leaving
        client.on("user-left", (user) => {
          setRemoteUsers((prevUsers) => prevUsers.filter((u) => u.uid !== user.uid));
          if (remoteUsers.length === 1) {
            clearInterval(timerInterval);
            setTimerInterval(null);
            setCallDuration(0);
            handleEndCall();
          }
        });

      } catch (error) {
        console.error("Error starting video call:", error);
      }
    };

    startCall();
  }, [client, channel, sender_token, sender_id, appid, remoteUsers, timerInterval]);

  // Store call details when the call ends
  const handleCallStore = async (callEndTime) => {
    const formData = new FormData();
    formData.append("call_duration", callDuration);
    formData.append("call_start_time", callStartTime);
    formData.append("call_end_time", callEndTime);
    formData.append("type", "video");

    const token = User_Authentication();
    if (!token) return;
    
    try {
      await Call_Store(formData, { Authorization: `Bearer ${token}` });
    } catch (error) {
      console.error("Error saving call data:", error);
    }
  };

  // Toggle Mute Audio
  const handleMuteToggle = () => {
    if (localAudioTrack) {
      const mutedState = !isMuted;
      localAudioTrack.setMuted(mutedState);
      setIsMuted(mutedState);
    }
  };

  // Toggle Video
  const handleVideoToggle = () => {
    if (localVideoTrack) {
      const videoState = !isVideoEnabled;
      localVideoTrack.setEnabled(videoState);
      setIsVideoEnabled(videoState);
    }
  };

  // End the call
  const handleEndCall = async () => {
    if (client) {
      const endTime = new Date().toISOString();
      await handleCallStore(endTime);
      await client.leave();
      setLocalVideoTrack(null);
      setLocalAudioTrack(null);
      setRemoteUsers([]);
      clearInterval(timerInterval);
      setTimerInterval(null);
      setCallDuration(0);
      navigate("/astrologer_list");
      window.location.reload();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="flex space-x-4">
        {/* Local Video */}
        <div id="local-video" className="w-64 h-64 bg-black"></div>

        {/* Remote Video */}
        {remoteUsers.map((user) => (
          <div key={user.uid} id={`remote-video-${user.uid}`} className="w-64 h-64 bg-black"></div>
        ))}
      </div>

      {/* Call Controls */}
      <div className="mt-4 flex space-x-4">
        <button onClick={handleMuteToggle} className="bg-blue-500 px-4 py-2 rounded">
          {isMuted ? "Unmute" : "Mute"}
        </button>
        <button onClick={handleVideoToggle} className="bg-green-500 px-4 py-2 rounded">
          {isVideoEnabled ? "Disable Video" : "Enable Video"}
        </button>
        <button onClick={handleEndCall} className="bg-red-500 px-4 py-2 rounded">
          End Call
        </button>
      </div>
    </div>
  );
};

export default Agora_Video_Call;
