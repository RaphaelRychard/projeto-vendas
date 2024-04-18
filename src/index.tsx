import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();


// isso é aparte incial do docuemnto tipo o index.html
// por aqui que vamos construir a nossa estrutura? sim e não
// na pasta compoents onde colco os  compontents tipo: cria uma pasta chamada buttons > index.tsx
