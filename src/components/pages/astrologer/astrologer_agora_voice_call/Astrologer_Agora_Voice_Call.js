// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { IMG_BASE_URL } from '../../../../config/Config';
// import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport';

// const Astrologer_Agora_Voice_Call = () => {
//   const location = useLocation();
//   const [connected_user, setConnected_User] = useState({}); // State to store the connected user data
//   const [callDuration, setCallDuration] = useState(0); // State to store the call duration
  
//   // Example to increase the call duration every second
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCallDuration((prev) => prev + 1); // Increment call duration every second
//     }, 1000);

//     return () => clearInterval(interval); // Clean up the interval when the component is unmounted
//   }, []);

//   useEffect(() => {
//     // Extract the 'message' query parameter from the URL
//     const queryParams = new URLSearchParams(location.search);
//     const extractedMessage = queryParams.get('message');

//     if (extractedMessage) {
//       console.log('Received message from notification:', extractedMessage);

//       try {
//         // Parse the JSON string into an object and update the state
//         const parsedMessage = JSON.parse(extractedMessage);
//         setConnected_User(parsedMessage);
//       } catch (error) {
//         console.error('Failed to parse message:', error);
//       }
//     }
//   }, [location]);

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-400"> {/* Centering content */}
//       <div className="text-center p-6 bg-white rounded-lg shadow-lg w-[500px]"> {/* Styling the container */}
//         {connected_user?.sender_name ? (
//           <>
//             <h1 className="text-2xl font-semibold mb-4">{connected_user?.sender_name}</h1> {/* Name styling */}
            
//             {/* User Profile Picture */}
//             {connected_user?.sender_profile != null ? (
//               <img
//                 src={`${IMG_BASE_URL}${connected_user?.sender_profile}`}
//                 alt="User profile"
//                 className="w-32 h-32 rounded-full mx-auto mb-4"
//               />
//             ) : (
//               <img
//                 src={`${Common_Images_Transport?.user_logo}`}
//                 alt="User profile"
//                 className="w-32 h-32 rounded-full mx-auto mb-4"
//               />
//             )}

//             {/* Call Duration */}
//             {/* <div className="mb-4">
//               <p className="text-lg font-medium">Call Duration: {Math.floor(callDuration / 60)}:{(callDuration % 60).toString().padStart(2, '0')}</p>
//             </div> */}

//             {/* Action Buttons */}
//             <div className="flex justify-around mb-4">
//               {/* Mute Button */}
//               <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none">
//                 <i className="fas fa-microphone-slash"></i> Mute
//               </button>

//               {/* Disconnect Button */}
//               <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 focus:outline-none">
//                 <i className="fas fa-phone-slash"></i> Disconnect
//               </button>
//             </div>
//           </>
//         ) : (
//           <p>Loading user details...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Astrologer_Agora_Voice_Call;


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

  // Extract query parameters
  const queryParams = new URLSearchParams(location.search);
  const channel = connected_user?.channel;
  const receiver_token = connected_user?.receiver_token;
  const receiver_id = connected_user?.receiver_id;
//   const channel = queryParams.get("channel");
//   const sender_token = queryParams.get("sender_token");
//   const sender_id = queryParams.get("sender_id");

  useEffect(() => {
    // Extract the 'message' query parameter from the URL
    const queryParams = new URLSearchParams(location.search);
    const extractedMessage = queryParams.get('message');

    if (extractedMessage) {
      console.log('Received message from notification:', extractedMessage);

      try {
        // Parse the JSON string into an object and update the state
        const parsedMessage = JSON.parse(extractedMessage);
        setConnected_User(parsedMessage);
      } catch (error) {
        console.error('Failed to parse message:', error);
      }
    }
  }, [location]);

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
    if (!client || !channel || !receiver_token || !receiver_id) return;
    
    const startCall = async () => {
      setIsLoading(true);
      try {
        // Join the channel
        await client.join(AGORA_APP_ID, channel, receiver_token, receiver_id);
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
  }, [client, channel, receiver_token, receiver_id]);

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
            
            {/* User Profile Picture */}
            {connected_user?.sender_profile != null ? (
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

            {/* Call Duration */}
            <div className="mb-4">
              <p className="text-lg font-medium">
                Call Duration: {Math.floor(callDuration / 60)}:{(callDuration % 60).toString().padStart(2, '0')}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-around mb-4">
              {/* Mute Button */}
              <button onClick={handleMuteToggle} className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none">
                <i className={`fas fa-microphone-slash ${isMuted ? 'text-gray-500' : 'text-white'}`}></i> 
                <span className="ml-2">{isMuted ? "Unmute" : "Mute"}</span>
              </button>

              {/* Disconnect Button */}
              <button onClick={handleEndCall} className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 focus:outline-none">
                <i className="fas fa-phone-slash"></i> Disconnect
              </button>
            </div>
          </>
         ) : (
          <p>Loading user details...</p>
        )} 

        {/* Remote Audio Container */}
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
    </div>
  );
};

export default Astrologer_Agora_Voice_Call;
