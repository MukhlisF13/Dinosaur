import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Home from './home';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
