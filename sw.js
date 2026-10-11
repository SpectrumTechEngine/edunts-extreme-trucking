// The game moved to /erdints-extreme-trucking/. This clears the old offline copy and switches itself off,
// so phones that had the old game saved always reach the redirect page.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((k) => Promise.all(k.map((x) => caches.delete(x))))
    .then(() => self.registration.unregister())
    .then(() => self.clients.matchAll()).then((cs) => cs.forEach((c) => c.navigate(c.url))));
});
