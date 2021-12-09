import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from './components/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
    <Auth0Provider
      domain="dev-2mg8pafa.us.auth0.com"
      clientId="n5wuu6mMzukD8QhmFtsVCXpPqIETnJKO"
      redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


