// Service worker: recebe as notificações de OS nova (Firebase) e permite instalar o app.
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDI-ZjPUnVahpliKZe2PlUa191O65AmUbc",
  authDomain: "manutencao-vista-alegre.firebaseapp.com",
  projectId: "manutencao-vista-alegre",
  storageBucket: "manutencao-vista-alegre.firebasestorage.app",
  messagingSenderId: "591376954758",
  appId: "1:591376954758:web:fdae83d7e05246272b6807"
});
firebase.messaging(); // mostra sozinho as notificações enviadas pelo Apps Script

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {}); // necessário para o Chrome oferecer "Instalar app"
