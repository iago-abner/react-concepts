import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Home } from './Home';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
    <App />
  </React.StrictMode>
);

reportWebVitals();
