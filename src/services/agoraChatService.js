// src/services/agoraChatService.js
import WebIM from "agora-chat";
// import AGORA_APP_KEY from "../../../";  // Import the Agora App Key from the config

// Initialize Agora Chat Client
const agoraChatClient = new WebIM.connection({
  appKey: "411270396#1464658", // Your Agora App Key
});

// Login function to authenticate a user
export const loginUser = async (username, password) => {
  try {
    await agoraChatClient.open({ user: username, pwd: password });
    console.log("Logged in successfully");
  } catch (error) {
    console.error("Login failed", error);
  }
};

// Send message function
export const sendMessage = async (receiver, message) => {
  const msg = new WebIM.message("txt", `${Date.now()}`);
  msg.set({
    msg: message,
    to: receiver,
    chatType: "singleChat", // This means it's a 1-on-1 chat
  });

  try {
    await agoraChatClient.send(msg); // Send the message
    console.log("Message sent successfully");
  } catch (error) {
    console.error("Message failed", error);
  }
};

// Export the Agora Chat client instance for future use (like logout)
export default agoraChatClient;
