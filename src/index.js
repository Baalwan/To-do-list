// index.js (with minor improvements)
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Adding a simple loading fallback
const RootApp = () => (
  <React.Suspense fallback={<div className="loading">Loading...</div>}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </React.Suspense>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootApp />);

// Optional: Keep performance monitoring
reportWebVitals();
