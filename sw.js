const CACHE_NAME = 'peter-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Instalar Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.log('Cache failed:', err);
      })
  );
  self.skipWaiting();
});

// Ativar Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Interceptar requisições
self.addEventListener('fetch', event => {
  // Apenas cache para GET
  if (event.request.method !== 'GET') {
    return;
  }

  // Para requisições da API Anthropic, usar network-first
  if (event.request.url.includes('api.anthropic.com')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          return response;
        })
        .catch(err => {
          console.log('API fetch failed:', err);
          return new Response(
            JSON.stringify({error: 'Sem conexão com a internet'}),
            {headers: {'Content-Type': 'application/json'}}
          );
        })
    );
    return;
  }

  // Para outros arquivos, usar cache-first
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then(response => {
            // Não fazer cache de respostas não-OK
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }

            // Fazer cache da resposta
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          });
      })
      .catch(err => {
        console.log('Fetch failed:', err);
        return new Response(
          'Erro ao carregar recurso. Verifique sua conexão.',
          {status: 503}
        );
      })
  );
});
