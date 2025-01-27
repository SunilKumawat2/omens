// importScripts('https://www.gstatic.com/firebasejs/9.16.0/firebase-app-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/9.16.0/firebase-messaging-compat.js');

// // Initialize Firebase
// firebase.initializeApp({
//   apiKey: "AIzaSyByT8j3m3QTdKlcNOXeevvd3hioq04vokM",
//   authDomain: "omens-5071f.firebaseapp.com",
//   projectId: "omens-5071f",
//   storageBucket: "omens-5071f.firebasestorage.app",
//   messagingSenderId: "516487949170",
//   appId: "1:516487949170:web:8a185648dfb57e36a0cbeb"
// });

// // Initialize Firebase Cloud Messaging
// const messaging = firebase.messaging();
// console.log("messaging initialized:", messaging);

// // Handle background push notifications
// messaging.onBackgroundMessage(function(payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload?.data?.body);

//   const notificationTitle = payload?.notification?.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: '/firebase-logo.png', // Customize icon
//     data: { 
//       url: 'http://localhost:3000/astrologer_agora_voice_call',
//       message: payload?.data?.body // Pass the message body to notification data
//     } 
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

// // Handle notification click to navigate and send data
// self.addEventListener('notificationclick', function(event) {
//   console.log('[firebase-messaging-sw.js] Notification click received.', event);
//   event.notification.close(); // Close the notification

//   const targetUrl = event.notification.data.url || '/';
//   const messageBody = event.notification.data.message;

//   // Send the message data to the target page via URL query params
//   const urlWithParams = new URL(targetUrl);
//   if (messageBody) {
//     urlWithParams.searchParams.append('message', messageBody);
//   }

//   // Focus existing tab or open a new one
//   event.waitUntil(
//     clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
//       for (let i = 0; i < clientList.length; i++) {
//         const client = clientList[i];
//         if (client.url === urlWithParams.toString() && 'focus' in client) {
//           return client.focus();
//         }
//       }
//       if (clients.openWindow) {
//         return clients.openWindow(urlWithParams.toString());
//       }
//     })
//   );
// });


importScripts('https://www.gstatic.com/firebasejs/9.16.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.16.0/firebase-messaging-compat.js');

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyByT8j3m3QTdKlcNOXeevvd3hioq04vokM",
  authDomain: "omens-5071f.firebaseapp.com",
  projectId: "omens-5071f",
  storageBucket: "omens-5071f.firebasestorage.app",
  messagingSenderId: "516487949170",
  appId: "1:516487949170:web:8a185648dfb57e36a0cbeb"
});


const messaging = firebase.messaging();
console.log("messaging initialized:", messaging);

// Handle background push notifications
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload?.data?.body);

 
  const baseUrl = self.location.origin; 

  const notificationTitle = payload?.notification?.title || "Notification Title";
  const notificationOptions = {
    body: payload?.notification?.body || "Notification Body",
    icon: '/firebase-logo.png', 
    data: { 
      url: `${baseUrl}/astrologer_agora_voice_call`,
      message: payload?.data?.body || ""
    }
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification click to navigate and send data
self.addEventListener('notificationclick', function(event) {
  console.log('[firebase-messaging-sw.js] Notification click received.', event);
  event.notification.close(); // Close the notification

  const targetUrl = event.notification.data.url || '/';
  const messageBody = event.notification.data.message;

  // Add message data to the URL as query params
  const urlWithParams = new URL(targetUrl);
  if (messageBody) {
    urlWithParams.searchParams.append('message', messageBody);
  }

  // Focus existing tab or open a new one
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i];
        if (client.url === urlWithParams.toString() && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(urlWithParams.toString());
      }
    })
  );
});
