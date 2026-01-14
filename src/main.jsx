import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n/i18n"; 
import "@fortawesome/fontawesome-free/css/all.min.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)