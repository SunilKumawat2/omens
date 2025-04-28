

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AgoraRTC from "agora-rtc-sdk-ng";
import Common_Images_Transport from "../../../common/common_imges_transport/Common_Images_Transport";
import { AGORA_APP_ID, IMG_BASE_URL } from "../../../../config/Config";

const Astrologer_Agora_Voice_Call = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [connected_user, setConnected_User] = useState({});
  const [callDuration, setCallDuration] = useState(0);
  const [client, setClient] = useState(null);
  const [localAudioTrack, setLocalAudioTrack] = useState(null);
  const [remoteUsers, setRemoteUsers] = useState([]);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [callEnded, setCallEnded] = useState(false); // To track if the call is ended

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const extractedMessage = queryParams.get("message");

    if (extractedMessage) {
      try {
        const parsedMessage = JSON.parse(extractedMessage);
        setConnected_User(parsedMessage);
      } catch (error) {
        console.error("Failed to parse message:", error);
      }
    }
  }, [location]);

  useEffect(() => {
    if (!client) {
      const rtcClient = AgoraRTC.createClient({
        mode: "rtc",
        codec: "vp8",
        region: "auto",
      });
      setClient(rtcClient);
    }
  }, [client]);

  useEffect(() => {
    if (!client || !connected_user?.channel || !connected_user?.receiver_token || !connected_user?.receiver_id) return;

    const startCall = async () => {
      setIsLoading(true);
      try {
        // Join the Agora channel
        await client.join(
          `${AGORA_APP_ID}`,
          connected_user.channel,
          connected_user.receiver_token,
          connected_user.receiver_id
        );

        // Create and publish local audio track
        const audioTrack = await AgoraRTC.createMicrophoneAudioTrack();
        setLocalAudioTrack(audioTrack);
        await client.publish(audioTrack);

        // Listen for remote user audio and handle user joining
        client.on("user-published", async (user, mediaType) => {
          if (mediaType === "audio") {
            await client.subscribe(user, mediaType);
            const remoteAudioTrack = user.audioTrack;
            if (remoteAudioTrack) remoteAudioTrack.play();
            setRemoteUsers((prevUsers) => [...prevUsers, user]);
          }
        });

        // Listen for remote user unpublishing their audio
        client.on("user-unpublished", (user, mediaType) => {
          if (mediaType === "audio") {
            setRemoteUsers((prevUsers) => prevUsers.filter((u) => u.uid !== user.uid));
          }
        });

        // Listen for remote users leaving the call
        client.on("user-left", (user) => {
          setRemoteUsers((prevUsers) => prevUsers.filter((u) => u.uid !== user.uid));
          if (remoteUsers.length === 0) {
            // If there are no more remote users, we can consider the call ended
            handleEndCall();
          }
        });
      } catch (error) {
        console.error("Error during call setup:", error);
      } finally {
        setIsLoading(false);
      }
    };

    startCall();
  }, [client, connected_user]);

  useEffect(() => {
    // Increment the call duration every second
    if (!callEnded) {
      const timer = setInterval(() => {
        setCallDuration((prevDuration) => prevDuration + 1);
      }, 1000);
  
      // Cleanup the timer when component unmounts or call ends
      return () => clearInterval(timer);
    }
  }, [callEnded]);

  const handleEndCall = async () => {
    if (client) {
      try {
        // Leave the call and clean up local track
        await client.leave();
        if (localAudioTrack) localAudioTrack.close();
        setLocalAudioTrack(null);
        setCallEnded(true); // Mark the call as ended
      } catch (error) {
        console.error("Error ending call:", error);
      }
    }
    // Navigate to astrologer home after ending the call
    navigate("/astrologer-home");
    window.location.reload()
  };

  const handleMuteToggle = () => {
    if (localAudioTrack) {
      localAudioTrack.setMuted(!isMuted);
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-400">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg w-[500px]">
        {connected_user?.sender_id ? (
          <>
            <h1 className="text-2xl font-semibold mb-4">{connected_user?.sender_name}</h1>

            {connected_user?.sender_profile ? (
              <img
                src={`${IMG_BASE_URL}${connected_user?.sender_profile}`}
                alt="User profile"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
            ) : (
              <img
                src={`${Common_Images_Transport?.user_logo}`}
                alt="User profile"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
            )}

            <div className="mb-4">
              <p className="text-lg font-medium">
                Call Duration: {Math.floor(callDuration / 60)}:{(callDuration % 60).toString().padStart(2, "0")}
              </p>
            </div>

            <div className="flex justify-around mb-4">
              <button
                onClick={handleMuteToggle}
                className={`p-2 rounded-full ${isMuted ? "bg-gray-400" : "bg-blue-500 text-white hover:bg-blue-600"}`}
              >
                <i className={`fas fa-microphone${isMuted ? "-slash" : ""}`}></i>
                <span className="ml-2">{isMuted ? "Unmute" : "Mute"}</span>
              </button>

              <button
                onClick={handleEndCall}
                className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
              >
                <i className="fas fa-phone-slash"></i> Disconnect
              </button>
            </div>
          </>
        ) : (
          <p>Loading user details...</p>
        )}
      </div>
    </div>
  );
};

export default Astrologer_Agora_Voice_Call;

