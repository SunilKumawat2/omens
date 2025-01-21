import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";  // useNavigate instead of useHistory
import AgoraRTC  from "agora-rtc-sdk-ng";
import { AGORA_APP_ID } from "../../config/Config";

const Agora_Voice_Call = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [client, setClient] = useState(null);
  const [localAudioTrack, setLocalAudioTrack] = useState(null);
  const [remoteUsers, setRemoteUsers] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();  // Use navigate instead of useHistory

  // Extract query params from the URL
  const queryParams = new URLSearchParams(location.search);
  const channel = queryParams?.get("channel");
  const sender_token = queryParams?.get("sender_token");
  const sender_id = queryParams?.get("sender_id");

  // Initialize Agora RTC client
  useEffect(() => {
    const rtcClient = AgoraRTC?.createClient({ mode: "rtc", codec: "vp8" });
    setClient(rtcClient);
  }, []);

  // Join the Agora channel using the URL parameters
  useEffect(() => {
    if (!client || !channel || !sender_token || !sender_id) return;

    const startCall = async () => {
      setIsLoading(true);
      try {
        await client.join(AGORA_APP_ID, channel, sender_token, sender_id);
        const audioTrack = await AgoraRTC.createMicrophoneAudioTrack();
        setLocalAudioTrack(audioTrack);
        await client.publish(audioTrack);

        // Set up event listeners
        client.on("user-published", async (user, mediaType) => {
          if (mediaType === "audio") {
            await client.subscribe(user, mediaType);
            const remoteAudioTrack = user.audioTrack;
            setRemoteUsers((prevUsers) => [...prevUsers, user]);

            const audioElement = document.createElement("audio");
            audioElement.id = `user-${user.uid}`;
            audioElement.autoplay = true;
            document.getElementById("remote-audio-container").appendChild(audioElement);
            remoteAudioTrack.play(audioElement);
          }
        });

        client.on("user-unpublished", (user, mediaType) => {
          if (mediaType === "audio") {
            setRemoteUsers((prevUsers) => prevUsers.filter((u) => u.uid !== user.uid));
            const audioElement = document.getElementById(`user-${user.uid}`);
            if (audioElement) {
              audioElement.remove();
            }
          }
        });
      } catch (error) {
        console.error("Error joining channel or publishing audio:", error);
      } finally {
        setIsLoading(false);
      }
    };

    startCall();
  }, [client, channel, sender_token, sender_id]);

  const handleEndCall = () => {
    // Navigate back to the call page using `navigate` instead of `history.push`
    navigate("/");
  };

  return (
    <div>
      <h1>In Call</h1>
      <button onClick={handleEndCall}>End Call</button>
      <div id="remote-audio-container">
        {remoteUsers.map((user) => (
          <div key={user.uid} className="user-card">
            <img src="your-placeholder-image-url" alt="User Logo" className="user-logo" />
            <div className="controls">
              <button onClick={() => console.log("Mute")}>Mute</button>
              <button onClick={() => console.log("Disconnect")}>Disconnect</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agora_Voice_Call;
