import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AgoraRTC from "agora-rtc-sdk-ng";
import { AGORA_APP_ID } from "../../config/Config";

const Agora_Voice_Call = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [client, setClient] = useState(null);
  const [localAudioTrack, setLocalAudioTrack] = useState(null);
  const [remoteUsers, setRemoteUsers] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const channel = queryParams.get("channel");
  const sender_token = queryParams.get("sender_token");
  const sender_id = queryParams.get("sender_id");
  console.log("channel_sender_token_sender_id", { sender_id, sender_token, channel });

  useEffect(() => {
    if (!client) {
      const rtcClient = AgoraRTC.createClient({
        mode: "rtc",  // Audio/Video call
        codec: "vp8", // Codec
        region: "auto"  // Region: auto for best region selection
      });
      setClient(rtcClient);
    }
  }, [client]);

  useEffect(() => {
    if (!client || !channel || !sender_token || !sender_id) return;
    
    const startCall = async () => {
      setIsLoading(true);
      try {
        // Join the channel
        await client.join(AGORA_APP_ID, channel, sender_token, sender_id);
        console.log("Joined channel successfully");

        // Create and publish the local audio track
        const audioTrack = await AgoraRTC.createMicrophoneAudioTrack();
        setLocalAudioTrack(audioTrack);
        await client.publish(audioTrack);
        console.log("Published local audio track");

        // Handle remote stream added (stream-published) 
        client.on("stream-added", async (evt) => {
          const stream = evt.stream;
          console.log("Stream added: " + stream.getId());
          // Subscribe to the stream
          await client.subscribe(stream);
        });

        // Handle remote stream subscribed
        client.on("stream-subscribed", (evt) => {
          const remoteStream = evt.stream;
          console.log("Subscribed to stream: " + remoteStream.getId());
          // Play remote stream
          remoteStream.play('remote-audio-container');
          setRemoteUsers((prevUsers) => [...prevUsers, remoteStream]);
        });

        // Handle user audio unpublishing
        client.on("user-unpublished", (user, mediaType) => {
          if (mediaType === "audio") {
            setRemoteUsers((prevUsers) => prevUsers.filter((u) => u.uid !== user.uid));
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
