importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCE7saZd1UgnaG4iYt-pJhdTNKymaKXl8A",
  authDomain: "surechigailab.firebaseapp.com",
  databaseURL: "https://surechigailab-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "surechigailab",
  storageBucket: "surechigailab.firebasestorage.app",
  messagingSenderId: "958640684148",
  appId: "1:958640684148:web:7b0bc3d95d85846ed2a521"
});

const messaging = firebase.messaging();

// バックグラウンド通知の受信
messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: '/surechigailab/icon.png',
    badge: '/surechigailab/icon.png',
  });
});
