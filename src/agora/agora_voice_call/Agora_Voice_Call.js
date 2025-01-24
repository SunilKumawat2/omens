// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import AgoraRTC from "agora-rtc-sdk-ng";
// import { AGORA_APP_ID, IMG_BASE_URL } from "../../config/Config";

// const Agora_Voice_Call = () => {
//   const astrologer_profile_image = localStorage.getItem("astrologer_profile_image")
//   const [isLoading, setIsLoading] = useState(false);
//   const [client, setClient] = useState(null);
//   const [localAudioTrack, setLocalAudioTrack] = useState(null);
//   const [remoteUsers, setRemoteUsers] = useState([]);
//   const [isMuted, setIsMuted] = useState(false);
//   console.log("remoteUsers", remoteUsers)
//   const location = useLocation();
//   const navigate = useNavigate();

//   const queryParams = new URLSearchParams(location.search);
//   // const channel = queryParams.get("channel");
//   // const sender_token = queryParams.get("sender_token");
//   // const sender_id = queryParams.get("sender_id");
//   const channel = localStorage.getItem("channel");
//   const sender_id = localStorage.getItem("sender_id");
//   const sender_token = localStorage.getItem("sender_token");
//   const astrologer_name = queryParams.get("astro_details_list");
//   console.log("channel_sender_token_sender_id", { sender_id, sender_token, channel });

//   // Log the App ID to verify it's correct
//   console.log("AGORA_APP_ID:", AGORA_APP_ID);

//   useEffect(() => {
//     if (!client) {
//       const rtcClient = AgoraRTC.createClient({
//         mode: "rtc",
//         codec: "vp8"
//       });
//       setClient(rtcClient);
//     }
//   }, [client]);

//   const appid = "a0d5f8d66e014624ad5d695deb8fb69c";
//   useEffect(() => {
//     if (!client || !channel || !sender_token || !sender_id) return;
//   console.error("Missing required parameters:", { appid, channel, sender_token, sender_id });
//     const startCall = async () => {
//       setIsLoading(true);

//       console.log("Joining with:", {
//         appid,
//         channel,
//         sender_token,
//         sender_id,
//       });

//       if (!appid) {
//         console.error("App ID is missing!");
//         setIsLoading(true);
//         return;
//       }

//       try {
//         console.log("Attempting to join the channel...");
//         await client.join(appid, channel, sender_token, sender_id);
//         console.log("Joined channel successfully");

//         console.log("Creating microphone audio track...");
//         const audioTrack = await AgoraRTC.createMicrophoneAudioTrack();
//         console.log("Microphone audio track created");

//         console.log("Publishing local audio track...");
//         await client.publish(audioTrack);
//         console.log("Published local audio track");

//         client.on("user-published", async (user, mediaType) => {
//           console.log("User published:", user);
//           await client.subscribe(user, mediaType);

//           if (mediaType === "audio") {
//             user.audioTrack.play();
//             setRemoteUsers((prevUsers) => [...prevUsers, user]);
//           }
//         });

//         client.on("user-unpublished", (user, mediaType) => {
//           console.log("User unpublished:", user);
//           if (mediaType === "audio") {
//             setRemoteUsers((prevUsers) => prevUsers.filter((u) => u.uid !== user.uid));
//           }
//         });

//         console.log("Event listeners registered");
//       } catch (error) {
//         console.error("Error joining channel or publishing audio:", error);
//         console.error("Error details:", {
//           appid,
//           channel,
//           sender_token,
//           sender_id,
//         });
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     startCall();
//   }, [client, channel, sender_token, sender_id, appid]);

//   const handleMuteToggle = () => {
//     if (localAudioTrack) {
//       localAudioTrack.setMuted(!isMuted);
//       setIsMuted(!isMuted);
//     }
//   };

//   const handleEndCall = () => {
//     if (client) {
//       client.leave().then(() => {
//         console.log("Left the channel");
//         navigate("/astrologer_list");
//       });
//     } else {
//       navigate("/astrologer_list");
//     }
//   };

//   return (
//     <div>
//       {
//         remoteUsers?.length == "0" && (
//           <>
//             <h1>In Call</h1>
//             <button onClick={handleEndCall}>End Call</button>
//           </>
//         )
//       }
//      {
//   remoteUsers?.length > 0 && (
//     <div className="flex items-center justify-center h-screen bg-gray-400">
//       <div className="text-center p-6 bg-white rounded-lg shadow-lg w-[500px] flex flex-col items-center">
//         {remoteUsers?.map((user) => (
//           <div key={user.uid} >
//             {/* User Image */}
//             <img 
//               src={`${IMG_BASE_URL}${astrologer_profile_image}`} 
//               alt="User Logo" 
//               className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-300 object-cover" 
//             />

//             {/* User Name */}
//             <h2 className="text-lg font-semibold text-gray-700 mb-2">{astrologer_name}</h2>

//             {/* Button Section */}
//             <div className="flex justify-center space-x-4">
//               {/* Mute Button */}
//               <button 
//                 onClick={handleMuteToggle} 
//                 className={`bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none transition duration-200`}
//               >
//                 <i className={`fas fa-microphone-slash ${isMuted ? 'text-gray-300' : 'text-white'}`}></i>
//                 <span className="ml-2">{isMuted ? "Unmute" : "Mute"}</span>
//               </button>

//               {/* Disconnect Button */}
//               <button 
//                 onClick={handleEndCall} 
//                 className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 focus:outline-none transition duration-200"
//               >
//                 <i className="fas fa-phone-slash"></i>
//                 <span className="ml-2">Disconnect</span>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

//     </div>
//   );
// };

// export default Agora_Voice_Call;

// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import AgoraRTC from "agora-rtc-sdk-ng";
// import { AGORA_APP_ID, IMG_BASE_URL } from "../../config/Config";
// import Common_Images_Transport from "../../components/common/common_imges_transport/Common_Images_Transport";
// import { Call_Store } from "../../api/agora/Agora";

// const Agora_Voice_Call = () => {
//   const astrologer_profile_image = localStorage.getItem("astrologer_profile_image");
//   const [isLoading, setIsLoading] = useState(false);
//   const [client, setClient] = useState(null);
//   const [localAudioTrack, setLocalAudioTrack] = useState(null);
//   const [remoteUsers, setRemoteUsers] = useState([]);
//   const [isMuted, setIsMuted] = useState(false);
//   const [callDuration, setCallDuration] = useState(0); // Call duration in seconds
//   const [timerInterval, setTimerInterval] = useState(null); // Timer interval ID
//   const location = useLocation();
//   const navigate = useNavigate();

//   const queryParams = new URLSearchParams(location.search);
//   const channel = localStorage.getItem("channel");
//   const sender_id = localStorage.getItem("sender_id");
//   const sender_token = localStorage.getItem("sender_token");
//   const astrologer_name = queryParams.get("astro_details_list");
//   const receiver_id = queryParams.get("receiver_id");

//   useEffect(() => {
//     if (!client) {
//       const rtcClient = AgoraRTC.createClient({
//         mode: "rtc",
//         codec: "vp8",
//       });
//       setClient(rtcClient);
//     }
//   }, [client]);

//   const appid = "a0d5f8d66e014624ad5d695deb8fb69c";

//   useEffect(() => {
//     if (!client || !channel || !sender_token || !sender_id) return;

//     const startCall = async () => {
//       setIsLoading(true);

//       try {
//         // Join the channel
//         await client.join(appid, channel, sender_token, sender_id);

//         // Create and publish local audio track
//         const audioTrack = await AgoraRTC.createMicrophoneAudioTrack();
//         setLocalAudioTrack(audioTrack);
//         await client.publish(audioTrack);

//         // Listen for remote users joining
//         client.on("user-published", async (user, mediaType) => {
//           if (mediaType === "audio") {
//             await client.subscribe(user, mediaType);
//             user.audioTrack.play();
//             setRemoteUsers((prevUsers) => [...prevUsers, user]);

//             // Start the timer when the user joins
//             if (timerInterval === null) {
//               const interval = setInterval(() => {
//                 setCallDuration((prev) => prev + 1);
//               }, 1000);
//               setTimerInterval(interval);
//             }
//           }
//         });

//         // Listen for remote users leaving
//         client.on("user-left", (user) => {
//           setRemoteUsers((prevUsers) => prevUsers.filter((u) => u.uid !== user.uid));

//           // Automatically disconnect and navigate when no remote users are left
//           if (remoteUsers.length === 1) {
//             clearInterval(timerInterval); // Stop the timer
//             setTimerInterval(null);
//             setCallDuration(0); // Reset call duration
//             handleEndCall(); // End the call and navigate
//           }
//         });

//         // Handle user unpublishing their audio
//         client.on("user-unpublished", (user) => {
//           setRemoteUsers((prevUsers) => prevUsers.filter((u) => u.uid !== user.uid));
//         });
//       } catch (error) {
//         console.error("Error joining channel:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     startCall();
//   }, [client, channel, sender_token, sender_id, appid, remoteUsers, timerInterval]);


//   // Toggle Mute
//   const handleMuteToggle = () => {
//     if (localAudioTrack) {
//       const mutedState = !isMuted;
//       localAudioTrack.setMuted(mutedState);
//       setIsMuted(mutedState);
//     }
//   };

//   // End the call
//   const handleEndCall = () => {
//     if (client) {
//       client.leave().then(() => {
//         setLocalAudioTrack(null);
//         setRemoteUsers([]);
//         clearInterval(timerInterval); // Stop the timer
//         setTimerInterval(null);
//         setCallDuration(0); // Reset call duration
//         navigate("/astrologer_list");
//         window.location.reload();
//       });
//     } else {
//       navigate("/astrologer_list");
//     }
//   };

//   // const Handle_call_store = async () => {
//   //   const formData = new FormData();
//   //   formData.append("receiver_id",receiver_id)
//   //   formData.append("call_duration",call_duration)
//   //   formData.append("call_start_time",call_start_time)
//   //   formData.append("call_end_time",call_end_time)
//   //   formData.append("type","voice")
//   //   try {
//   //     const response = await Call_Store(formData, )
//   //   }
//   //   catch (error) {

//   //   }
//   // }

//   // Format call duration into MM:SS
//   const formatCallDuration = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
//   };

//   return (
//     <div>
//       {remoteUsers?.length === 0 && (
//         <div className="flex items-center justify-center h-screen bg-gray-400">
//           <div className="text-center p-6 bg-white rounded-lg shadow-lg w-[500px]">
//             <img
//               src={`${Common_Images_Transport?.user_logo}`}
//               alt="User Logo"
//               className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-300 object-cover"
//             />
//             <h1 className="text-xl font-semibold mb-4">Waiting for user to join...</h1>
//             <button
//               onClick={handleEndCall}
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//             >
//               End Call
//             </button>
//           </div>
//         </div>
//       )}

//       {remoteUsers?.length > 0 && (
//         <div className="flex items-center justify-center h-screen bg-gray-400">
//           <div className="text-center p-6 bg-white rounded-lg shadow-lg w-[500px] flex flex-col items-center">
//             {remoteUsers?.map((user) => (
//               <div key={user.uid}>
//                 {/* User Image */}
//                 <img
//                   src={`${IMG_BASE_URL}${astrologer_profile_image}`}
//                   alt="User Logo"
//                   className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-300 object-cover"
//                 />

//                 {/* User Name */}
//                 <h2 className="text-lg font-semibold text-gray-700 mb-2">
//                   {astrologer_name}
//                 </h2>

//                 {/* Call Duration */}
//                 <div className="text-gray-500 mb-4">
//                   Call Duration: {formatCallDuration(callDuration)}
//                 </div>

//                 {/* Button Section */}
//                 <div className="flex justify-center space-x-4">
//                   {/* Mute Button */}
//                   <button
//                     onClick={handleMuteToggle}
//                     className={`bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none transition duration-200`}
//                   >
//                     <i
//                       className={`fas fa-microphone-slash ${isMuted ? "text-gray-300" : "text-white"
//                         }`}
//                     ></i>
//                     <span className="ml-2">{isMuted ? "Unmute" : "Mute"}</span>
//                   </button>

//                   {/* Disconnect Button */}
//                   <button
//                     onClick={handleEndCall}
//                     className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 focus:outline-none transition duration-200"
//                   >
//                     <i className="fas fa-phone-slash"></i>
//                     <span className="ml-2">Disconnect</span>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Agora_Voice_Call;

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
        // Join the channel
        await client.join(appid, channel, sender_token, sender_id);

        // Set the call start time
        const startTime = new Date().toISOString();
        setCallStartTime(formatDateTime(startTime));

        // Create and publish local audio track
        const audioTrack = await AgoraRTC.createMicrophoneAudioTrack();
        setLocalAudioTrack(audioTrack);
        await client.publish(audioTrack);

        // Listen for remote users joining
        client.on("user-published", async (user, mediaType) => {
          if (mediaType === "audio") {
            await client.subscribe(user, mediaType);
            user.audioTrack.play();
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

        // Handle user unpublishing their audio
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
    formData.append("call_end_time", callEndTime);  // Directly send the end time here
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
      const formattedEndTime = formatDateTime(endTime); // Format the end time

      // Save call data with the end time
      Handle_call_store(formattedEndTime);

      client.leave().then(() => {
        setLocalAudioTrack(null);
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
                  {/* Mute Button */}
                  <button
                    onClick={handleMuteToggle}
                    className={`bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none transition duration-200`}
                  >
                    <i
                      className={`fas fa-microphone-slash ${isMuted ? "text-gray-300" : "text-white"
                        }`}></i>
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
      )}
    </div>
  );
};

export default Agora_Voice_Call;
