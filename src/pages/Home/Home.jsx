import React, { useState } from "react";
import MenuContent from "../../components/Navbar/MenuContent";
import NavContent from "../../components/SectionsNav/NavContent";
import Vendas from "../Sections/Vendas";
import "../../assets/styles/scss/Sections/Home.scss";

function Home() {
  const [componentActual, setComponentActual] = useState("");
  const [currentSection, setCurrentSection] = useState(null);
  function SelectRender() {
    switch (currentSection) {
      case 0:
        break;
      case 1:
        break;
      case 4:
        console.log("tamo no 4");
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
