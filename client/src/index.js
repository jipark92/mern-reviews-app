import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/header.css';
import './css/reviews.css';
import './css/reviewcards.css'
import './css/footer.css';
import './css/uploadform.css'
import './css/contact.css'
import './css/faq.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);