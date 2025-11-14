import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import './index.css';
import App from './App.tsx';
import { AuthProvider } from './context/AuthContext'; // 1. IMPORTAR

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider> {/* 2. "ABRAÇAR" O APP */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);