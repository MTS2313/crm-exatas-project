
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
import Home from "./pages/Home/Home";
import PageTests from "./tests.dev/page.test";
import Overview from "./components/GlobalComponents/OverviewSystem/Overview";

  export default function(){
        return (
            <BrowserRouter>
                <Routes>
                  <Route path="/signin" element={<Login />} />
                  <Route path="/signup" element={<CreateAccount />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/tests" element={<Overview overviewName="Contas a pagar" overviewValue={23}/>}/>
                </Routes>
            </BrowserRouter>
          );
  }