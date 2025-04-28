// import React, { useCallback, useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// const Zego_Cloud_Room_Id_Video_Call = () => {
//     const [value,setValue] = useState("");

//     const navigate = useNavigate();

//     const Handle_join_room = useCallback(()=>{
//         navigate(`/zegocloud_video_call/${value}`)
//     },[navigate,value])
//   return (
//     <div>
//         <input type='text' value={value} onChange={(e)=>setValue(e.target.value)} placeholder='Enter the Room Code  '/>
//         <button onClick={Handle_join_room}>Join</button>

//     </div>
//   )
// }

// export default Zego_Cloud_Room_Id_Video_Call


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Zego_Cloud_Room_Id_Video_Call = () => {
    const [roomID, setRoomID] = useState("");
    const navigate = useNavigate();

    const handleJoinRoom = () => {
        if (!roomID.trim()) {
            alert("Please enter a valid Room ID");
            return;
        }
        if (roomID.includes(" ")) {
            alert("Room ID cannot contain spaces. Please enter a valid Room ID.");
            return;
        }
        console.log("Navigating to:", `/zegocloud_video_call/${roomID}`);
        navigate(`/zegocloud_video_call/${roomID}`);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-md text-center">
                <h2 className="text-2xl font-semibold text-white mb-4">
                    Join a Video Call
                </h2>
                <input
                    type="text"
                    value={roomID}
                    onChange={(e) => setRoomID(e.target.value)}
                    placeholder="Enter Room Code"
                    className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleJoinRoom}
                    className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300 disabled:bg-gray-500"
                    disabled={!roomID.trim()}
                >
                    Join Room
                </button>
            </div>
        </div>
    );
};

export default Zego_Cloud_Room_Id_Video_Call;
