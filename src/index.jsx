import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { register } from './Utils/serviceWorkerRegistration';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

register();
