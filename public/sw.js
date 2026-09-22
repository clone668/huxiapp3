// 最小 Service Worker — 仅为满足 PWA 安装条件，不做离线缓存
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
