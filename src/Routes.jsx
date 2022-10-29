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

const messages = {
    'PT-BR': messages_pt,
    'EN': messages_en
};

export const LanguageContext = React.createContext();


export default function () {
  
  // default language
  let defaultLanguage= 'PT-BR' 

  const [language, setLanguage] = useState(() => {
    const langFromLocalStorage = window.localStorage.getItem("lang");

    return langFromLocalStorage ? langFromLocalStorage : defaultLanguage;
  });

  useEffect(() => {
    const langFromLocalStorage = window.localStorage.getItem("lang");
    if(langFromLocalStorage != language){
      window.localStorage.setItem("lang", language)
      location.reload()
    }
  },[language])
  
  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <LanguageContext.Provider value={{language, setLanguage}}>
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
      </LanguageContext.Provider>
    </IntlProvider>

  );
}
