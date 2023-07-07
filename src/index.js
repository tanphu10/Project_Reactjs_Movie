import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react";
import { store } from "./redux/configStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider Store={store}>
    <App />
  </Provider>
);
