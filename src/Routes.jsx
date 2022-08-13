import React from "react";
import "./assets/font/interweb/inter.css";
import "./assets/styles/config.global.css";
import CreateAccount from "./pages/signup/CreateAccount";
import Login from "./pages/signin/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/" element={<Home />} />  
      </Routes>
    </BrowserRouter>
  );
}
