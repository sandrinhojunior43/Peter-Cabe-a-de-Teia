// Guarda a casca do Peter para ele abrir mesmo sem rede.
// As respostas da IA nunca são guardadas: dependem de rede e mudam sempre.

var CACHE = 'peter-v4';
var SHELL = [
  './',
  './index.html',
  './manifest.json',
  './peter-192.png',
  './peter-512.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return c.addAll(SHELL); })
