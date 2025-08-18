import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PageProvider } from "./components/PageContext"; // Optional, only if you use it
import "./index.css"; // Ensure this file exists

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PageProvider>
      <App />
    </PageProvider>
  </React.StrictMode>
);