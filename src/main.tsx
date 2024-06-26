import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.tsx'
import './index.css';
import { initializeApp } from 'firebase/app';
import Pf1App from './pf1App.tsx';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
console.log('app', app);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Pf1App />
  </React.StrictMode>,
);
