import React, { useState } from "react";
import {
  MdDashboard,
  MdExitToApp,
  MdPerson,
  MdAttachMoney,
  MdTrendingDown,
} from "react-icons/md";
import "../../assets/styles/scss/NavContent/NavContent.scss";
import ButtonDropDown from "../GlobalComponents/NavComponents/ButtonDropDown";
import ButtonRender from "../GlobalComponents/NavComponents/ButtonRender";
import ButtonRenderControl from "../GlobalComponents/NavComponents/ButtonRenderControl.test";

function NavContent({ currentSection, setCurrentSection }) {
  const [NavState, setNavState] = useState(true);
  const [NavScale, setNavScale] = useState("largeNav");
  const [Btntr, setBtntr] = useState("buttonopen");
  const [DivBarControl, setDivBarControl] = useState("DivBarControlopen");
  function NavWidthControl(state) {
    state
      ? (setNavScale("smallNav"),
        setBtntr("buttonclosed"),
        setDivBarControl("DivBarControlClosed"))
      : (setNavScale("largeNav"),
        setBtntr("buttonopen"),
        setDivBarControl("DivBarControlopen"));
    setNavState(!NavState);
  }

  return (
    <>
      <div className={`NavContent ${NavScale}`} id="NavContent">
        <div className="IconControl"></div>
        <button
          className={`ButtonContrlNav ${Btntr}`}
          onClick={(i) => {
            NavState ? NavWidthControl(true) : NavWidthControl(false);
          }}
        >
          <div className="Stroke1" />
          <div className="Stroke2" />
          <div className="Stroke3" />
        </button>
        <div className={DivBarControl} />
        <div
          className={`${
            NavState ? "SectionSelectTrue" : "SectionSelectFalse"
          } ContentButtonsRender`}
        >
          <ButtonRenderControl
            isDrop={false}
            isOpen={NavState}
            onClick={() => {
              NavState ? null : NavWidthControl(false);
              setCurrentSection(0);
            }}
            name="DashBoard"
            icon={<MdDashboard color="#fff" size={"2rem"} />}
            Selected={currentSection === 0}
            iconNoselected={
              <MdDashboard size={"2rem"} opacity={"50%"} color="#fff" />
            }
            iconSelected={<MdDashboard size={"2rem"} color="#fff" />}
          />
          <ButtonRenderControl 
          isDrop={true}
          isOpen={NavState}
          icon={<MdAttachMoney color="#fff" size={"2rem"}/>} 
          name="venda"
          onClick={() => {
            NavState ? null : NavWidthControl(false);
            setCurrentSection(2);
          }}
          Selected={currentSection === 2}

          />
          
        </div>
        <div className="ExitContent">
          <MdExitToApp color="#D57373" size={25} />
          {NavState ? <h3>Sair</h3> : null}
        </div>
      </div>
    </>
  );
}

export default NavContent;
