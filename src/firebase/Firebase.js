import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByT8j3m3QTdKlcNOXeevvd3hioq04vokM",
  authDomain: "omens-5071f.firebaseapp.com",
  projectId: "omens-5071f",
  storageBucket: "omens-5071f.firebasestorage.app",
  messagingSenderId: "516487949170",
  appId: "1:516487949170:web:8a185648dfb57e36a0cbeb"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging
const messaging = getMessaging(app);
console.log("messaging",messaging)
// Register service worker (this should be inside the app's JavaScript code)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/firebase-messaging-sw.js')  // This should be the relative path to the service worker
    .then((registration) => {
      console.log('Service Worker registered:', registration);
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
}

// Request permission to send notifications and get FCM token
export const requestPermission = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey: "BOCo563dt3Ft0n_dkwCdN8-gwAUpE3gmerpdrYJ9cpleGy3KjQ8hx0wjDnTU6tNRQeRnhzFmu9KeG9355UCXpKg"  // Replace this with your actual VAPID key
    });

    if (token) {
      console.log("FCM Token:", token);
      return token;
    } else {
      console.log("No registration token available.");
      return null;
    }
  } catch (error) {
    console.error("Error retrieving FCM token:", error);
    return null;
  }
};

export { messaging };
