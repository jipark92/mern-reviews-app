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
import './css/updateform.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Auth0Provider} from '@auth0/auth0-react'

const domain = "dev-x5534m0p.us.auth0.com"
const clientId = "xM6mx8ZLwSi0jQCtmzlgmLdJJP45PCpy"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);