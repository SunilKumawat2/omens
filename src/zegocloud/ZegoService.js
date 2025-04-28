import ZIM from "zego-zim-web";
import { messaging } from "../firebase/Firebase"; // Import Firebase Messaging

const APP_ID = 1231838222; // Replace with your ZegoCloud App ID

// ✅ Initialize ZegoCloud SDK
export const zim = ZIM.create({ appID: APP_ID });

let currentUserID = ""; // Global variable to store user ID

export const loginUser = async (userID, userName) => {
    try {
        const token = "04AAAAAGfT2mMADOduTxJbg+ft2MBu7QC7d0520FWD4nOxPdDqASiQWIQwL7iXSHKyp+lopNzN1q8TQ3RPIjwMyVZq+sozEDWJVp+9XPOhiYupZpj2EvcDkXg04N+r86Lr6PlNPJ1VJECL1vD8B9k7FZktinSfyncms2MCp8O4Bfyf77PRImMSUAah2t7Tb2IZbZzgP1RsFcWExWen3NGnuqikFbs+K/26yb05rsB3+nmrnaEEcS33hEyL23S/Iq6sUjwQoSw1zz/dVn2Evzdu2naGDgE="; // Replace with actual token
        await zim.login({ userID:"omens_video_call", userName:"sunil kumawat", token });

        // ✅ Store the user ID manually
        currentUserID = userID;
        console.log("✅ User logged in:", userID);
    } catch (error) {
        console.error("❌ Login failed:", error);
    }
};

// Function to get the logged-in user ID
export const getLoggedInUserID = () => currentUserID;


// ✅ Function to logout user from ZegoCloud
export const logoutUser = () => {
    zim.logout();
    console.log("✅ User logged out");
};

// ✅ Function to register push notifications with ZegoCloud
export const registerPushNotifications = async () => {
    try {
        const fcmToken = await messaging.getToken(); // Get FCM token

        // ✅ Use built-in `registerPushToken` instead of ZPNs
        await zim.registerPushToken({
            provider: "FCM",
            token: fcmToken
        });

        console.log("✅ Push notifications registered with ZegoCloud");
    } catch (error) {
        console.error("❌ Push registration failed", error);
    }
};
