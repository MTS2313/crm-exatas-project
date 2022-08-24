import React, { useState } from "react";
import MenuContent from "../../components/Navbar/MenuContent";
import NavContent from "../../components/SectionsNav/NavContent";
import "./styles/Home.scss";
import DashboardScreen from "../../components/CRM/CRMPages/Dashboard";

function Home() {
  const [componentActual, setComponentActual] = useState("");
  const [currentSection, setCurrentSection] = useState(null);
  function SelectRender() {
    switch (currentSection) {
      case 0:
        return <DashboardScreen/>
        break;
      case 1:
        return<h3>case 1</h3>
        break;
      case 2:
        return <h3>case 2</h3>
        break;
      case 3:
            setCurrentSection(4)
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
