import React, { useState, useEffect } from "react";
import MenuContent from "../../components/Navbar/MenuContent";
import NavContent from "../../components/SectionsNav/NavContent";
import "./styles/Home.scss";
import DashboardScreen from "../../components/CRM/CRMPages/Dashboard";
import { useParams } from "react-router-dom";
import Catalog from "../Sections/Catalog/Catalog";

function Home() {
  const [componentActual, setComponentActual] = useState("");
  const [currentSection, setCurrentSection] = useState(null);
  const {section} = useParams()

  useEffect(() => {
    if(section){
      switch(section){
        case 'vendas':
          setCurrentSection(2)
          break;
      }
    }
  }, [section])

  function SelectRender() {
    switch (currentSection) {
      case 0:
        return <DashboardScreen/>
      case 1:
        return <h3>Relatorio</h3>
      case 2:
        return <Catalog/>
      case 3:
        return <h3>case 3</h3>
      case 4:
        return <h3>case 4</h3>
      case 5:
          return <h3>case 5</h3>        
      case 6:
          return <h3>case 6</h3>        
      case 7:
          return <h3>case 7</h3>        
      case 8:
          return <h3>case 8</h3>        
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
