import React, { useState, useEffect } from "react";
import NavContent from "../../components/SectionsNav/NavContent";
import "./styles/Home.scss";
import DashboardScreen from "../../components/CRM/CRMPages/Dashboard";
import { useParams } from "react-router-dom";
import Stock from "../Sections/Stock/Stock";
import Configuration from "../Sections/Configuration/Configuration";

function Home() {
  const [componentActual, setComponentActual] = useState("");
  const [currentSection, setCurrentSection] = useState(null);
  const { section } = useParams();

  useEffect(() => {
    if (section) {
      switch (section) {
        case "vendas-relatorio":
          setCurrentSection(2);
          break;
        case "stock":
          setCurrentSection(6);
          break;
        case "configurations":
          setCurrentSection(7);
          break;
      }
    }
  }, [section]);

  useEffect(() => {
    if (currentSection) {
      switch (currentSection) {
        case 2:
          return setPathName("vendas-relatorio");
        case 6:
          return setPathName("stock");
        case 7:
          return setPathName("configurations");
        default:
          return setPathName("");
      }
    }
  }, [currentSection]);

  function setPathName(section) {
    const path = `/home/${section}`;
    if (window?.location.pathname != path) {
      window.history.pushState("", "CRM", path);
    }
  }

  function SelectRender() {
    switch (currentSection) {
      case 0:
        return <DashboardScreen />;
      case 1:
        return <h3>Nova Venda</h3>;
      case 2:
        return <h3>relatorio</h3>;
      case 3:
        return <h3>test</h3>;
      case 4:
        return <h3>case 4</h3>;
      case 5:
        return <h3>case 5</h3>;
      case 6:
        return <Stock />;
      case 7:
        return <Configuration />;
      case 8:
        return <h3>case 8</h3>;
      default:
        break;
    }
  }

  return (
    <div className="Home">
      <NavContent
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        setComponentActual={setComponentActual}
      />
      <div className="RenderContent">
        {/* {currentSection == 1 && console.log(componentActual)} */}
        {SelectRender()}
      </div>
    </div>
  );
}

export default Home;
