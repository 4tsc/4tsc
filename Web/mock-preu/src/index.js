import React from 'react';
import ReactDOM from 'react-dom/client'; // Correcto para React 18
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Busca el elemento root en el HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación usando createRoot
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// Si quieres medir el rendimiento, usa reportWebVitals
reportWebVitals();
