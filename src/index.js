import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/main.css";
import App from "./App";

import { ToastContainer } from "react-toastify";
const Root = () => {
  return (
    <React.StrictMode>
      <App />
      <ToastContainer />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
