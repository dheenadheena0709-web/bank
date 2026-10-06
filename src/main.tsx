import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// 1. Mount React application immediately
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}

// 2. Only register ServiceWorker in production on standalone top-level window (never in dev iframe)
if (
  import.meta.env.PROD &&
  typeof window !== 'undefined' &&
  'serviceWorker' in navigator &&
  window.self === window.top
) {
  import('virtual:pwa-register')
    .then(({ registerSW }) => {
      registerSW({
        immediate: true,
        onRegisterError() {},
      });
    })
    .catch(() => {});
}
