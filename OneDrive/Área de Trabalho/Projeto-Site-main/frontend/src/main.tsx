import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// 1. IMPORTAR O BROWSER ROUTER AQUI
import { BrowserRouter } from 'react-router-dom'; 
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 2. ADICIONAR O ROUTER A "ABRAÇAR" O <App /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);