// import * as React from 'react';
// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
// import { useParams } from 'react-router-dom';


// function randomID(len) {
//   let result = '';
//   if (result) return result;
//   var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
//     maxPos = chars.length,
//     i;
//   len = len || 5;
//   for (i = 0; i < len; i++) {
//     result += chars.charAt(Math.floor(Math.random() * maxPos));
//   }
//   return result;
// }

// export function getUrlParams(
//   url = window.location.href
// ) {
//   let urlStr = url.split('?')[1];
//   return new URLSearchParams(urlStr);
// }

// export default function App() {
//     //   const roomID = getUrlParams().get('roomID') || randomID(5);
//     const {roomID} = useParams()
//       let myMeeting = async (element) => {
//      // generate Kit Token
//       const appID =1231838222;
//       const serverSecret ="2877b3bc13c2df4b8679e8a47095589e";
//       const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(),"sunil Kumawat");

    
//      // Create instance object from Kit Token.
//       const zp = ZegoUIKitPrebuilt.create(kitToken);
//       // start the call
//       zp.joinRoom({
//         container: element,
//         sharedLinks: [
//           {
//             name: 'Omens Users',
//             url:
//              window.location.protocol + '//' + 
//              window.location.host + window.location.pathname +
//               '?roomID=' +
//               roomID,
//           },
//         ],
//         scenario: {
//         //   mode: ZegoUIKitPrebuilt.OneONoneCall, 
//           mode: ZegoUIKitPrebuilt.VoiceCall, 
//         },
//         showCameraToggleButton: false
//       });

    
//   };

//   return (
//     <div
//       className="myCallContainer"
//       ref={myMeeting}
//       style={{ width: '100vw', height: '100vh' }}
//     ></div>
//   );
// }



import * as React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../config/Config';

function randomID(len) {
  let result = '';
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length;
  len = len || 5;
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

export default function App() {
  const { roomID } = useParams(); // Get room ID from URL
  const startTimeRef = React.useRef(Date.now()); // Store call start time

  // Function to get user token (mocked here)
  const User_Authentication = () => {
    return localStorage.getItem("user_token") || null; // Fetch token from local storage
  };

  // Call store function
  const Handle_call_store = async (callEndTime) => {
    const receiver_id = "123456"; // Replace with actual receiver ID
    const callDuration = Math.floor((callEndTime - startTimeRef.current) / 1000); // Calculate duration in seconds
    const callStartTime = new Date(startTimeRef.current).toISOString();

    const formData = new FormData();
    formData.append("receiver_id", receiver_id);
    formData.append("call_duration", callDuration);
    formData.append("call_start_time", callStartTime);
    formData.append("call_end_time", new Date(callEndTime).toISOString());
    formData.append("type", "audio");

    const token = User_Authentication();
    if (!token) {
      console.error("User token not found");
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/store-call`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("✅ Call data saved successfully:", response.data);
    } catch (error) {
      console.error("❌ Error saving call data:", error);
    }
  };

  let myMeeting = async (element) => {
    const appID = 1231838222;
    const serverSecret = "2877b3bc13c2df4b8679e8a47095589e";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "Sunil Kumawat"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Omens Users',
          url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VoiceCall, // Voice Call Mode
      },
      showCameraToggleButton: false,

      // When user leaves the call
      onLeaveRoom: () => {
        const callEndTime = Date.now(); // Capture call end time
        Handle_call_store(callEndTime); // Call function to store call details
      },
    });
  };

  return (
    <div className="myCallContainer" ref={myMeeting} style={{ width: '100vw', height: '100vh' }}></div>
  );
}
