import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Find root element safely
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found. Make sure your index.html has a <div id='root'></div>");
}

const root = createRoot(rootElement);

// Optional: React.StrictMode helps find potential issues in development
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
