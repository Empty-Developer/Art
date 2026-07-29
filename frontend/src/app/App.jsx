import React from "react";
import Hello from "../pages/hello-page/Hello.jsx";
import { Routes, Route } from "react-router-dom";
import Registration from "../pages/auth/Registration.jsx";
import Login from "../pages/auth/Login.jsx";

export default function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/registration" element={<Registration />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </div>
    </>
  );
}
