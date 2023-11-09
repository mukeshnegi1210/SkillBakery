import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./pages/Homepage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
