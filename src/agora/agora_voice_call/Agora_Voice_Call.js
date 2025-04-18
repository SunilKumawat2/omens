import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AgoraRTC from "agora-rtc-sdk-ng";
import { AGORA_APP_ID, IMG_BASE_URL } from "../../config/Config";
import Common_Images_Transport from "../../components/common/common_imges_transport/Common_Images_Transport";
import { Call_Store } from "../../api/agora/Agora";
import { User_Authentication } from "../../user_authentication/User_Authentication";

const Agora_Voice_Call = () => {
  const astrologer_profile_image = localStorage.getItem("astrologer_profile_image");
  const [isLoading, setIsLoading] = useState(false);
  const [client, setClient] = useState(null);
  const [localAudioTrack, setLocalAudioTrack] = useState(null);
  const [remoteUsers, setRemoteUsers] = useState([]);
  const [isMuted, setIsMuted] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);
  const [callStartTime, setCallStartTime] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const channel = localStorage.getItem("channel");
  const sender_id = localStorage.getItem("sender_id");
  const sender_token = localStorage.getItem("sender_token");
  const astrologer_name = queryParams.get("astro_details_list");
  const receiver_id = queryParams.get("receiver_id");

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
        await client.join(appid, channel, sender_token, sender_id);
        const startTime = new Date().toISOString();
        setCallStartTime(formatDateTime(startTime));
        const audioTrack = await AgoraRTC.createMicrophoneAudioTrack();
        setLocalAudioTrack(audioTrack);
        await client.publish(audioTrack);

        // Listen for remote users joining
        client.on("user-published", async (user, mediaType) => {
          if (mediaType === "audio") {
            await client.subscribe(user, mediaType);
            user.audioTrack.play();
            setRemoteUsers((prevUsers) => [...prevUsers, user]);
            if (timerInterval === null) {
              const interval = setInterval(() => {
                setCallDuration((prev) => prev + 1);
              }, 1000);
              setTimerInterval(interval);
            }
          }
        });
        client.on("user-left", (user) => {
          setRemoteUsers((prevUsers) => prevUsers.filter((u) => u.uid !== user.uid));
          if (remoteUsers.length === 1) {
            clearInterval(timerInterval); 
            setTimerInterval(null);
            setCallDuration(0); 
            handleEndCall(); 
          }
        });
        client.on("user-unpublished", (user) => {
          setRemoteUsers((prevUsers) => prevUsers.filter((u) => u.uid !== user.uid));
        });
      } catch (error) {
        console.error("Error joining channel:", error);
      } finally {
        setIsLoading(false);
      }
    };

    startCall();
  }, [client, channel, sender_token, sender_id, appid, remoteUsers, timerInterval]);

  // Call store function
  const Handle_call_store = async (callEndTime) => {
    const formData = new FormData();
    formData.append("receiver_id", receiver_id);
    formData.append("call_duration", callDuration);
    formData.append("call_start_time", callStartTime);
    formData.append("call_end_time", callEndTime);  
    formData.append("type", "audio");

    const token = User_Authentication();
    if (!token) {
      setIsLoading(false);
      throw new Error("User token not found");
    }
    try {
      const response = await Call_Store(formData, { Authorization: `Bearer ${token}` });
      console.log("Call data saved successfully:", response);
    } catch (error) {
      console.error("Error saving call data:", error);
    }
  };

  const handleMuteToggle = () => {
    if (localAudioTrack) {
      const mutedState = !isMuted;
      localAudioTrack.setMuted(mutedState);
      setIsMuted(mutedState);
    }
  };

  // End the call
  const handleEndCall = () => {
    if (client) {
      const endTime = new Date().toISOString();
      const formattedEndTime = formatDateTime(endTime); 
      Handle_call_store(formattedEndTime);
      client.leave().then(() => {
        setLocalAudioTrack(null);
        setRemoteUsers([]);
        clearInterval(timerInterval); 
        setTimerInterval(null);
        setCallDuration(0); 
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
  // Function to format date-time to 'YYYY-MM-DD HH:MM:SS'
  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      {remoteUsers?.length === 0 && (
        <div className="flex items-center justify-center h-screen bg-gray-400">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg w-[500px]">
            <img src={`${Common_Images_Transport?.user_logo}`} alt="User Logo" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-300 object-cover"/>
            <h1 className="text-xl font-semibold mb-4">Waiting for user to join...</h1>
            <button onClick={handleEndCall} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">End Call</button>
          </div>
        </div>
      )}

      {remoteUsers?.length > 0 && (
        <div className="flex items-center justify-center h-screen bg-gray-400">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg w-[500px] flex flex-col items-center">
            {remoteUsers?.map((user) => (
              <div key={user.uid}>
                <img src={`${IMG_BASE_URL}${astrologer_profile_image}`} alt="User Logo" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-300 object-cover"/>
                <h2 className="text-lg font-semibold text-gray-700 mb-2">{astrologer_name}</h2>
                <div className="text-gray-500 mb-4">Call Duration: {formatCallDuration(callDuration)}</div>
                <div className="flex justify-center space-x-4">
                  <button onClick={handleMuteToggle} className={`bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none transition duration-200`}>
                    <i className={`fas fa-microphone-slash ${isMuted ? "text-gray-300" : "text-white"}`}></i>
                    <span className="ml-2">{isMuted ? "Unmute" : "Mute"}</span>
                  </button>
                  <button onClick={handleEndCall} className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 focus:outline-none transition duration-200">
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

export default Agora_Voice_Call;
