import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { ThemeConfig } from "./config/theme.config";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeConfig>
      <Provider store={store}>
        <Auth0Provider
          domain="dev-3151lg3cezjv8mhv.us.auth0.com"
          clientId="JDjiAH9F2zrHLjNmCiZBgrBX9QsPatBe"
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <App />
        </Auth0Provider>
      </Provider>
    </ThemeConfig>
  </React.StrictMode>
);

reportWebVitals();
