import React from "react";
import Hello from "../pages/hello-page/Hello.jsx";
import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";

export default function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Hello />} />
        </Routes>
      </div>
    </>
  );
}
