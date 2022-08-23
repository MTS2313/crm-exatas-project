import React from "react";
import "./assets/font/interweb/inter.css";
import "./assets/styles/config.global.css";
import {BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Portfolio from "./pages/Portfolio/Portfolio";
import DashboardScreen from "./components/CRM/CRMPages/Dashboard";
import VendasScreen from "./components/CRM/CRMPages/Vendas";
import Home from "./pages/Home/Home";
import CreateAccount from "./pages/signup/CreateAccount";
import Login from "./pages/signin/Login";
import App from "./App";

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} exact />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/teste" element={<VendasScreen />} />
        <Route path="/testtable" element={<App />} />
        <Route path="/home" element={<Home />} />  
      </Routes>
    </BrowserRouter>
  );
}
