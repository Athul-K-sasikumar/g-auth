import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';


createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-xcpqb3p03n5efy45.us.auth0.com"
  clientId="9OGL12q54WfGuhA8wk1oJcaXBVMXqGvD"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
    <App />
    </Auth0Provider>,
)
