
import React from "react";
import "./assets/font/interweb/inter.css"
import "./assets/styles/config.global.css";
import CreateAccount from "./pages/signup/CreateAccount";
import Login from "./pages/signin/Login";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Portfolio from "./pages/home/Portfolio";

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} exact />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}