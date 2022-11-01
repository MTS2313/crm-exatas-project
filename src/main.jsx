import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './Routes'
import { GlobalContextProvider } from "./context/GlobalContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <GlobalContextProvider>
      <Routes />
    </GlobalContextProvider>
  </React.StrictMode>
);
