import React from "react";
import "./assets/font/interweb/inter.css";
import "./assets/styles/config.global.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Portfolio from "./pages/Portfolio/Portfolio";
import CreateAccount from "./pages/signup/CreateAccount";
import Login from "./pages/signin/Login";
import App from "./App";
import ViewProduct from "./pages/Sections/Catalog/Modals/ViewProduct";
import Catalog from "./pages/Sections/Catalog/Catalog";
import Home from "./pages/Home/Home";

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} exact />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/home" element={<Home/>}/>
        {/* URLs  PARA TESTE */}
        <Route path="/viewProduct" element={<ViewProduct />} />
        <Route path="/testtable" element={<App />} />
        <Route path="/cata" element={<Catalog/>}/>
      </Routes>
    </BrowserRouter>
  );
}
