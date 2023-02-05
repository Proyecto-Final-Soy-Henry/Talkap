import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import store from "./store/index.js";
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-e0fe2tb8jr3oe4yq.us.auth0.com"
        clientId="WawCbbdYBrnbIDvqnhUIyulgHhicovQJ"
        redirectUri={window.location.origin}
        cacheLocation="localstorage"
      >
        <ChakraProvider theme={theme}>
          <ColorModeScript />
          <Provider store={store}>
            <App />
          </Provider>
        </ChakraProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
