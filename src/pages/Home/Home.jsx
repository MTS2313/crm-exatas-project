import React, { useState } from "react";
import MenuContent from "../../components/Navbar/MenuContent";
import NavContent from "../../components/SectionsNav/NavContent";
import "./styles/Home.scss";
import DashboardScreen from "../../components/CRM/CRMPages/Dashboard";
import Catalog from "../Sections/Catalog/Catalog";

function Home() {
  const [componentActual, setComponentActual] = useState("");
  const [currentSection, setCurrentSection] = useState(null);
  function SelectRender() {
    switch (currentSection) {
      case 0:
        return <DashboardScreen/>
        break;
      case 1:
        break;
        case 2:
        return <Catalog/>
        break;
      case 3:
        return <h3>case 3</h3>
        break;
      case 4:
        return <h3>case 4</h3>
        break;
      case 5:
          return <h3>case 5</h3>        
        break;
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
