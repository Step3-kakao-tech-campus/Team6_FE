import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

// Root element 가져오기
const rootElement = document.getElementById("root");

// Concurrent Mode를 사용하여 App 렌더링
const root = ReactDOM.createRoot(rootElement);
root.render(
  <HelmetProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HelmetProvider>,
);
