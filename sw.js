const C='taekwondo-facile-final-v1',A=["./", "./index.html", "./manifest.webmanifest", "./tkd_garde.gif", "./tkd_salut.gif", "./junbi_jase.svg", "./ap_seogi.svg", "./ap_kubi.svg", "./dwit_kubi.svg", "./kkoa_seogi.svg", "./niunja_seogi.svg"];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
