import React, { useState, useEffect, useRef } from 'react';
import AC from 'agora-chat';
import { AGORA_APP_CHAT_APP_KEY, IMG_BASE_URL } from '../../config/Config';
import Common_Images_Transport from '../../components/common/common_imges_transport/Common_Images_Transport';

const AgoraChat = () => {
  const astrologer_profile_image = localStorage.getItem("astrologer_profile_image");
  const astrologer_name = localStorage.getItem("astrologer_name");
  const [messages, setMessages] = useState([]);
  const [messages_list, setMessages_List] = useState([]);
  console.log("messages_list", messages_list)
  const [messageInput, setMessageInput] = useState('');
  const [conn, setConn] = useState(null);
  const messagesEndRef = useRef(null); // Auto-scroll reference

  // Dummy user credentials (Replace with real ones)
  const accessToken = "007eJxTYLjxY0tD0dOm2LcNTMqrtDarHPve3rf74NJEkakvd+u1z1ZSYEg0SDFNs0gxM0s1MDQxMzJJTDFNMbM0TUlNskhLMrNM3iSwPb0hkJHhznE5JkYGVgZGIATxVRhM05JSjJJTDHRTjZLNdA0NU9N0LcxNknQTU8wSjcwSzcwsjJIAlVsqaA==";
  const user = "sunil_omens_5";
  const chatPartner = "sunil_receiver_26";

  useEffect(() => {
    if (accessToken && user) {
      const client = new AC.connection({ appKey: AGORA_APP_CHAT_APP_KEY });
      const options = { user: user, accessToken: accessToken };

      client.open(options)
        .then(() => {
          setConn(client);
          console.log("Connected to Agora Chat");
        })
        .catch((error) => console.error("Connection failed:", error));
    }
  }, [accessToken, user]);

  useEffect(() => {
    if (conn) {
      conn.addEventHandler("messageReceived", {
        onTextMessage: (msg) => {
          setMessages(prevMessages => [...prevMessages, { sender: msg.from, text: msg.msg, time: msg.time }]);
        },
      });
    }
  }, [conn]);

  // Fetch Chat History
  useEffect(() => {
    const fetchChatHistory = async () => {
      if (!conn || !user || !chatPartner) return;

      try {
        const options = {
          queue: chatPartner,
          // count: 100, 
          chatType: "singleChat",
        };

        const result = await conn.fetchHistoryMessages(options);
        // setMessages_List(result)
        console.log("📩 Chat History:", result[0]?.data);

        if (result && result) {
          const formattedMessages = result.map(msg => ({
            sender: msg.from,
            text: msg.data,
            time: msg.time,
          }));

          setMessages(formattedMessages);
        }
      } catch (error) {
        console.error("Error fetching chat history:", error);
      }
    };

    if (conn) {
      fetchChatHistory();
    }
  }, [conn, user, chatPartner]);

  useEffect(() => {
    const fetchChatPartners = async () => {
      if (!conn || !user) return;

      try {
        // Fetch the list of conversations the user is part of
        const conversations = await conn.getConversationList();

        console.log("All Conversations:", conversations);

        const participants = new Set();

        conversations.forEach((conversation) => {
          // Get members of the conversation
          const members = conversation.getMembers(); // Get the members of the conversation
          console.log("members", members);

          members.forEach((member) => {
            if (member !== user) { // Exclude the current user
              participants.add(member); // Add the other participants
            }
          });
        });

        // Convert the Set to an array and update the state
        const chatPartners = Array.from(participants);

        setMessages_List(chatPartners);
        console.log("All Chat Partners:", chatPartners);

      } catch (error) {
        console.error("Error fetching chat partners:", error);
      }
    };

    if (conn) {
      fetchChatPartners();
    }
  }, [conn, user]);





  // Send Message
  const sendMessage = async (e) => {
    e.preventDefault()
    if (!conn || !messageInput.trim() || !chatPartner) return;

    try {
      const msg = AC.message.create({
        chatType: 'singleChat',
        type: 'txt',
        to: chatPartner,
        msg: messageInput,
      });

      await conn.send(msg);
      setMessages(prevMessages => [...prevMessages, { sender: user, text: messageInput, time: Date.now() }]);
      setMessageInput('');
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50 px-2">
      <div className="flex flex-col w-[95%] sm:w-[80%] max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-4 border border-gray-200 h-[85vh]">

        {/* Header with Profile */}
        <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg">
          {astrologer_profile_image ? (
            <img
              src={`${IMG_BASE_URL}${astrologer_profile_image}`}
              alt="Receiver Avatar"
              className="h-14 w-14 rounded-full border-2 border-gray-300 object-cover shadow-sm"
            />
          ) : (
            <img
              src={`${Common_Images_Transport?.user_logo}`}
              alt="Receiver Avatar"
              className="h-14 w-14 rounded-full border-2 border-gray-300 object-cover shadow-sm"
            />
          )}

          <div>
            <h3 className="text-xl font-semibold text-gray-800">{astrologer_name}</h3>
            <p className="text-sm text-gray-500">Online</p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-100 rounded-md flex flex-col gap-3 h-[70vh]">
          {messages?.map((msg, index) => (
            <div key={index} className={`max-w-[75%] p-3 rounded-lg text-sm flex flex-col shadow-md ${msg.sender === user ? 'bg-[#9F2225] text-white self-end' : 'bg-gray-200 text-gray-800 self-start'}`}>
              <strong className="block text-xs mb-1">{msg?.sender === user ? "You" : msg?.sender}</strong>
              <span className="break-words">{msg?.text}</span>
              <p className="text-[10px] text-white-500 mt-1 self-end">
                {new Date(parseInt(msg?.time)).toLocaleTimeString()}
              </p>
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>

        {/* Message Input Section */}
        <div className="flex mt-3 border-t border-gray-300 pt-3">
          <form onSubmit={sendMessage} className="flex w-full gap-3 items-center">
            <input
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden min-h-[40px] max-h-[150px] w-full"
              rows="1"
            />
            <button
              type="submit"
              className="ml-3 px-5 py-3 bg-[#9F2225] text-white rounded-lg hover:bg-[#9F2225] transition-all"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 bg-gray-100 rounded-md flex flex-col gap-3 h-[70vh]">
        {/* Display all chat partners */}
        {messages_list?.length > 0 ? (
          messages_list?.map((partner, index) => (
            <div key={index} className="p-3 rounded-lg text-sm flex flex-col shadow-md bg-gray-200 text-gray-800">
              {/* Example: Display the partner's ID or name */}
              <strong>{partner?.from || "Unknown Partner"}</strong> {/* Safely access from */}
              <p className="text-xs">Click to start chatting...</p>
            </div>
          ))
        ) : (
          <p>No chat partners found.</p>
        )}

      </div>

    </div>

  );
};

export default AgoraChat;
