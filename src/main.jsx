import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
       domain="dev-x4bwgxvgt0ocit6a.us.auth0.com"
       clientId="JySpGttoXc9B4BKXK6A7XasDjinm9DPe"
       authorizationParams={{
         redirect_uri: window.location.origin
       }}
    >
    <App />
    </Auth0Provider>
  </StrictMode>,
)
