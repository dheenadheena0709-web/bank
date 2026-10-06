import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// 1. Immediately render App so preview always displays without blocking
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}

// 2. Safely register PWA service worker when published on top-level window (not in iframe sandbox)
try {
  if (
    typeof window !== 'undefined' &&
    'serviceWorker' in navigator &&
    window.self === window.top
  ) {
    import('virtual:pwa-register')
      .then(({ registerSW }) => {
        registerSW({
          immediate: true,
          onRegisterError() {
            // Silently ignore registration error in restricted sandbox environments
          },
        });
      })
      .catch(() => {});
  }
} catch {
  // Gracefully ignored in iframe preview
}
