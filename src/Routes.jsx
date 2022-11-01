import React, {useState} from "react";
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

import Home from "./pages/Home/Home";

import {IntlProvider} from 'react-intl'
import messages_pt from "../lang/pt.json";
import messages_en from "../lang/en.json";
import { useEffect } from "react";
import { useGlobal } from "./context/GlobalContext";

const messages = {
    'PT-BR': messages_pt,
    'EN': messages_en
};



export default function () {
    const {language} = useGlobal()
  return (
      <IntlProvider locale={language} messages={messages[language]}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Portfolio />} exact />
              <Route path="/signin" element={<Login />} />
              <Route path="/signup" element={<CreateAccount />} />
              {/* url able to change language */}
                <Route path="/home" element={<Home />} />
                <Route path="/home/:section" element={<Home />} />

              {/* URLs  PARA TESTE */}
              <Route path="/testtable" element={<App />} />
            </Routes>
          </BrowserRouter>
      </IntlProvider>
  );
}
