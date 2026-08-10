const C='taekwondo-facile-v5-humain',A=["./", "./index.html", "./manifest.webmanifest", "./tkd_garde.gif", "./tkd_salut.gif", "./naranhi_seogi.png", "./ap_seogi.png", "./ap_kubi.png", "./dwit_kubi.png", "./juchum_seogi.png", "./kkoa_seogi.png"];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
