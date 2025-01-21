importScripts('https://www.gstatic.com/firebasejs/9.16.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.16.0/firebase-messaging-compat.js');

// importScripts('/firebase-app.js');
// importScripts('/firebase-messaging.js');


// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyByT8j3m3QTdKlcNOXeevvd3hioq04vokM",
  authDomain: "omens-5071f.firebaseapp.com",
  projectId: "omens-5071f",
  storageBucket: "omens-5071f.firebasestorage.app",
  messagingSenderId: "516487949170",
  appId: "1:516487949170:web:8a185648dfb57e36a0cbeb"
});

// Initialize Firebase Cloud Messaging
const messaging = firebase.messaging();

// Handle background push notifications
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png', // Customize icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
