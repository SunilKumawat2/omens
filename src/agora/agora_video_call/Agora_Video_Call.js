import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AgoraRTC from "agora-rtc-sdk-ng";
import { AGORA_APP_ID, IMG_BASE_URL } from "../../config/Config";
import Common_Images_Transport from "../../components/common/common_imges_transport/Common_Images_Transport";

const Agora_Video_Call = () => {
  const astrologer_profile_image = localStorage.getItem("astrologer_profile_image");
  const [isLoading, setIsLoading] = useState(false);
  const [client, setClient] = useState(null);
  const [localAudioTrack, setLocalAudioTrack] = useState(null);
  const [localVideoTrack, setLocalVideoTrack] = useState(null);
  const [remoteUsers, setRemoteUsers] = useState([]);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [callDuration, setCallDuration] = useState(0); // Call duration in seconds
  const [timerInterval, setTimerInterval] = useState(null); // Timer interval ID
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const channel = localStorage.getItem("channel");
  const sender_id = localStorage.getItem("sender_id");
  const sender_token = localStorage.getItem("sender_token");
  const astrologer_name = queryParams.get("astro_details_list");

  useEffect(() => {
    if (!client) {
      const rtcClient = AgoraRTC.createClient({
        mode: "rtc",
        codec: "vp8",
      });
      setClient(rtcClient);
    }
  }, [client]);

  const appid = "a0d5f8d66e014624ad5d695deb8fb69c";
  
  useEffect(() => {
    if (!client || !channel || !sender_token || !sender_id) return;
  
    const startCall = async () => {
      setIsLoading(true);
  
      try {
        // Join the channel
        await client.join(appid, channel, sender_token, sender_id);
  
        // Create and publish local audio and video tracks
        const [audioTrack, videoTrack] = await AgoraRTC.createMicrophoneAndCameraTracks();
        setLocalAudioTrack(audioTrack);
        setLocalVideoTrack(videoTrack);
        await client.publish([audioTrack, videoTrack]);
  
        // Listen for remote users joining
        client.on("user-published", async (user, mediaType) => {
          if (mediaType === "audio" || mediaType === "video") {
            await client.subscribe(user, mediaType);
            if (mediaType === "audio") {
              user.audioTrack.play();
            } else if (mediaType === "video") {
              const remoteVideoContainer = document.createElement("div");
              remoteVideoContainer.id = `remote-user-${user.uid}`;
              document.getElementById("remote-video-container").appendChild(remoteVideoContainer);
              user.videoTrack.play(remoteVideoContainer);
            }
            setRemoteUsers((prevUsers) => [...prevUsers, user]);
  
            // Start the timer when the user joins
            if (timerInterval === null) {
              const interval = setInterval(() => {
                setCallDuration((prev) => prev + 1);
              }, 1000);
              setTimerInterval(interval);
            }
          }
        });
  
        // Listen for remote users leaving
        client.on("user-left", (user) => {
          setRemoteUsers((prevUsers) => prevUsers.filter((u) => u.uid !== user.uid));
  
          // Automatically disconnect and navigate when no remote users are left
          if (remoteUsers.length === 1) {
            clearInterval(timerInterval); // Stop the timer
            setTimerInterval(null);
            setCallDuration(0); // Reset call duration
            handleEndCall(); // End the call and navigate
          }
        });
  
        // Handle user unpublishing their audio or video
        client.on("user-unpublished", (user) => {
          setRemoteUsers((prevUsers) => prevUsers.filter((u) => u.uid !== user.uid));
          const videoContainer = document.getElementById(`remote-user-${user.uid}`);
          if (videoContainer) {
            videoContainer.remove();
          }
        });
      } catch (error) {
        console.error("Error joining channel:", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    startCall();
  }, [client, channel, sender_token, sender_id, appid, remoteUsers, timerInterval]);
  

  // Toggle Mute Audio
  const handleMuteToggle = () => {
    if (localAudioTrack) {
      const mutedState = !isMuted;
      localAudioTrack.setMuted(mutedState);
      setIsMuted(mutedState);
    }
  };

  // Toggle Mute Video
  const handleVideoMuteToggle = () => {
    if (localVideoTrack) {
      const mutedState = !isVideoMuted;
      localVideoTrack.setMuted(mutedState);
      setIsVideoMuted(mutedState);
    }
  };

  // End the call
  const handleEndCall = () => {
    if (client) {
      client.leave().then(() => {
        setLocalAudioTrack(null);
        setLocalVideoTrack(null);
        setRemoteUsers([]);
        clearInterval(timerInterval); // Stop the timer
        setTimerInterval(null);
        setCallDuration(0); // Reset call duration
        navigate("/astrologer_list");
        window.location.reload();
      });
    } else {
      navigate("/astrologer_list");
    }
  };

  // Format call duration into MM:SS
  const formatCallDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <div>
      {remoteUsers?.length === 0 && (
        <div className="flex items-center justify-center h-screen bg-gray-400">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg w-[500px]">
            <img
              src={`${Common_Images_Transport?.user_logo}`}
              alt="User Logo"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-300 object-cover"
            />
            <h1 className="text-xl font-semibold mb-4">Waiting for user to join...</h1>
            <button
              onClick={handleEndCall}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              End Call
            </button>
          </div>
        </div>
      )}

      {remoteUsers?.length > 0 && (
        <div className="flex items-center justify-center h-screen bg-gray-400">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg w-[500px] flex flex-col items-center">
            {remoteUsers?.map((user) => (
              <div key={user.uid}>
                {/* Remote User Video */}
                <div id={`remote-user-${user.uid}`} className="w-full h-full mb-4"></div>

                {/* User Image */}
                <img
                  src={`${IMG_BASE_URL}${astrologer_profile_image}`}
                  alt="User Logo"
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-300 object-cover"
                />

                {/* User Name */}
                <h2 className="text-lg font-semibold text-gray-700 mb-2">
                  {astrologer_name}
                </h2>

                {/* Call Duration */}
                <div className="text-gray-500 mb-4">
                  Call Duration: {formatCallDuration(callDuration)}
                </div>

                {/* Button Section */}
                <div className="flex justify-center space-x-4">
                  {/* Mute Audio Button */}
                  <button
                    onClick={handleMuteToggle}
                    className={`bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none transition duration-200`}
                  >
                    <i className={`fas fa-microphone-slash ${isMuted ? "text-gray-300" : "text-white"}`}></i>
                    <span className="ml-2">{isMuted ? "Unmute" : "Mute"}</span>
                  </button>

                  {/* Mute Video Button */}
                  <button
                    onClick={handleVideoMuteToggle}
                    className={`bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none transition duration-200`}
                  >
                    <i className={`fas fa-video-slash ${isVideoMuted ? "text-gray-300" : "text-white"}`}></i>
                    <span className="ml-2">{isVideoMuted ? "Unmute Video" : "Mute Video"}</span>
                  </button>

                  {/* Disconnect Button */}
                  <button
                    onClick={handleEndCall}
                    className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 focus:outline-none transition duration-200"
                  >
                    <i className="fas fa-phone-slash"></i>
                    <span className="ml-2">Disconnect</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Agora_Video_Call;
