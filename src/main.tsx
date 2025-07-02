import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n'
import { initAutoRetry } from './services/api'

// Initialize auto-retry system for failed submissions
initAutoRetry();

createRoot(document.getElementById("root")!).render(<App />);
