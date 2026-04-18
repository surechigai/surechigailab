+ let isForeground = false;
+ self.addEventListener('message', (event) => {
+   if (event.data?.type === 'FOREGROUND_ACK') {
+     isForeground = true;
+     setTimeout(() => { isForeground = false; }, 5000);
+   }
+ });

  messaging.onBackgroundMessage((payload) => {
+   if (isForeground) return;
    const { title, body } = payload.notification;
    self.registration.showNotification(title, {
      body,
      icon: '/surechigailab/icon.png',
      badge: '/surechigailab/icon.png',
+     tag: 'surechigai-notif',
    });
  });
