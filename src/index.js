import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SassComponent from './SassComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SassComponent />
  </React.StrictMode>
);