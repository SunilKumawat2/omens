import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AgoraRTC from "agora-rtc-sdk-ng";
import { AGORA_APP_ID, IMG_BASE_URL } from "../../config/Config";

const Agora_Voice_Call = () => {
  const astrologer_profile_image = localStorage.getItem("astrologer_profile_image")
  const [isLoading, setIsLoading] = useState(false);
  const [client, setClient] = useState(null);
  const [localAudioTrack, setLocalAudioTrack] = useState(null);
  const [remoteUsers, setRemoteUsers] = useState([]);
  const [isMuted, setIsMuted] = useState(false);
  console.log("remoteUsers", remoteUsers)
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  // const channel = queryParams.get("channel");
  // const sender_token = queryParams.get("sender_token");
  // const sender_id = queryParams.get("sender_id");
  const channel = localStorage.getItem("channel");
  const sender_id = localStorage.getItem("sender_id");
  const sender_token = localStorage.getItem("sender_token");
  const astrologer_name = queryParams.get("astro_details_list");
  console.log("channel_sender_token_sender_id", { sender_id, sender_token, channel });

  // Log the App ID to verify it's correct
  console.log("AGORA_APP_ID:", AGORA_APP_ID);

  useEffect(() => {
    if (!client) {
      const rtcClient = AgoraRTC.createClient({
        mode: "rtc",
        codec: "vp8"
      });
      setClient(rtcClient);
    }
  }, [client]);

  const appid = "a0d5f8d66e014624ad5d695deb8fb69c";
  useEffect(() => {
    if (!client || !channel || !sender_token || !sender_id) return;
  console.error("Missing required parameters:", { appid, channel, sender_token, sender_id });
    const startCall = async () => {
      setIsLoading(true);

      console.log("Joining with:", {
        appid,
        channel,
        sender_token,
        sender_id,
      });

      if (!appid) {
        console.error("App ID is missing!");
        setIsLoading(true);
        return;
      }

      try {
        console.log("Attempting to join the channel...");
        await client.join(appid, channel, sender_token, sender_id);
        console.log("Joined channel successfully");

        console.log("Creating microphone audio track...");
        const audioTrack = await AgoraRTC.createMicrophoneAudioTrack();
        console.log("Microphone audio track created");

        console.log("Publishing local audio track...");
        await client.publish(audioTrack);
        console.log("Published local audio track");

        client.on("user-published", async (user, mediaType) => {
          console.log("User published:", user);
          await client.subscribe(user, mediaType);

          if (mediaType === "audio") {
            user.audioTrack.play();
            setRemoteUsers((prevUsers) => [...prevUsers, user]);
          }
        });

        client.on("user-unpublished", (user, mediaType) => {
          console.log("User unpublished:", user);
          if (mediaType === "audio") {
            setRemoteUsers((prevUsers) => prevUsers.filter((u) => u.uid !== user.uid));
          }
        });

        console.log("Event listeners registered");
      } catch (error) {
        console.error("Error joining channel or publishing audio:", error);
        console.error("Error details:", {
          appid,
          channel,
          sender_token,
          sender_id,
        });
      } finally {
        setIsLoading(false);
      }
    };

    startCall();
  }, [client, channel, sender_token, sender_id, appid]);

  const handleMuteToggle = () => {
    if (localAudioTrack) {
      localAudioTrack.setMuted(!isMuted);
      setIsMuted(!isMuted);
    }
  };

  const handleEndCall = () => {
    if (client) {
      client.leave().then(() => {
        console.log("Left the channel");
        navigate("/astrologer_list");
      });
    } else {
      navigate("/astrologer_list");
    }
  };

  return (
    <div>
      {
        remoteUsers?.length == "0" && (
          <>
            <h1>In Call</h1>
            <button onClick={handleEndCall}>End Call</button>
          </>
        )
      }
     {
  remoteUsers?.length > 0 && (
    <div className="flex items-center justify-center h-screen bg-gray-400">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg w-[500px] flex flex-col items-center">
        {remoteUsers?.map((user) => (
          <div key={user.uid} >
            {/* User Image */}
            <img 
              src={`${IMG_BASE_URL}${astrologer_profile_image}`} 
              alt="User Logo" 
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-300 object-cover" 
            />

            {/* User Name */}
            <h2 className="text-lg font-semibold text-gray-700 mb-2">{astrologer_name}</h2>

            {/* Button Section */}
            <div className="flex justify-center space-x-4">
              {/* Mute Button */}
              <button 
                onClick={handleMuteToggle} 
                className={`bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none transition duration-200`}
              >
                <i className={`fas fa-microphone-slash ${isMuted ? 'text-gray-300' : 'text-white'}`}></i>
                <span className="ml-2">{isMuted ? "Unmute" : "Mute"}</span>
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
  )
}

    </div>
  );
};

export default Agora_Voice_Call;
