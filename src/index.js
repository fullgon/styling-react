import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SassComponent from './SassComponent';
import StyledComponent from './StyledComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledComponent />
  </React.StrictMode>
);