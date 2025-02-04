import React, { useState, useEffect } from 'react';
import AC from 'agora-chat';
import { AGORA_APP_CHAT_APP_KEY } from '../../config/Config';

const AgoraChat = () => {
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [conn, setConn] = useState(null);
  const [chatClient, setChatClient] = useState(null);

  // ✅ Retrieve token & user ID from localStorage
  const accessToken = String(localStorage.getItem("chat_token") || "").trim();
  const user = String(localStorage.getItem("chat_uiid") || "").trim();
  
  useEffect(() => {
    if (accessToken && user) {
      console.log("Using chatToken:", typeof accessToken);
      console.log("Using user:", user);

      const client = new AC.connection({
        appKey: AGORA_APP_CHAT_APP_KEY, // ✅ Replace with your Agora App Key
      });

      const options = {
        user: "sunil_kumawat_5",
        accessToken: "007eJxTYNg34yi7kKrvrsrtF1LWubyuCCyJnxfI5sEktoNR1Myd01OBIdEgxTTNIsXMLNXA0MTMyCQxxTTFzNI0JTXJIi3JzDJZY/3C9IZARoYze9qYGRlYGRiBEMRXYTCzTExNsTA00E01SkrWNTRMTdNNNDM21jU3NkwxNjM0NbI0MgcAT2gkaw==",  // ✅ Use "accessToken", not "pwd"
      };

      client.open(options)
        .then(() => {
          console.log("Successfully logged into Agora Chat");
          setConn(client);
          setChatClient(client);
        })
        .catch((error) => {
          console.error("Failed to log into Agora Chat:", error);
        });
    } else {
      console.error("Missing chatToken or user");
    }
  }, [accessToken, user]);

  const sendMessage = async () => {
    if (!conn || !messageInput.trim()) return;
  
    try {
      // Create the message
      const msg = AC.message.create({
        chatType: 'singleChat',
        type: 'txt',
        to: '26',  // Replace with actual receiver ID
        msg: messageInput,
      });
  
      // Send the message
      await conn.send(msg);
  
      // Message sent successfully, update state
      setMessages(prevMessages => [...prevMessages, { sender: user, text: messageInput }]);
      setMessageInput('');  // Clear input after sending the message
  
      console.log("Message sent successfully!");
  
      // Optionally, show a success notification or feedback to the user
      alert("Message sent!");
  
    } catch (error) {
      console.error("Error sending message:", error);
  
      // Handle error case - inform the user
      alert("Failed to send the message. Please try again.");
    }
  };
  

  return (
    <div>
      <h3>Agora Chat</h3>

      {/* Chat Messages */}
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender === user ? "You" : msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      {/* Message Input */}
      <input
        type="text"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default AgoraChat;
