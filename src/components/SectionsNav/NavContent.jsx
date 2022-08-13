import React, { useState } from "react";
import { MdDashboard, MdExitToApp, MdPerson } from "react-icons/md";
import "../../assets/styles/scss/NavContent/NavContent.scss";
import ButtonDropDown from "../GlobalComponents/NavComponents/ButtonDropDown";
import ButtonRender from "../GlobalComponents/NavComponents/ButtonRender";
import ButtonRenderControl from "../GlobalComponents/NavComponents/ButtonRenderControl.test";

function NavContent({ currentSection, setCurrentSection, setComponentActual }) {
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
            isDrop={true}
            name="DashBoard"
            isOpen={NavState}
            icon={<MdDashboard color="#fff" size={"2rem"} />}
            iconNoselected={
              <MdDashboard size={"2rem"} opacity={"50%"} color="#fff" />
            }
            iconSelected={
              <MdDashboard size={"2rem"} color="#fff"/>
            }
            onClick={() => setCurrentSection(4)}
            Selected={(currentSection === 4)}
          />
          <ButtonRender
            onClick={() => {
              setCurrentSection(0);
            }}
            BtnName="Dashboard"
            BarState={NavState}
            Selected={currentSection == 0}
            BtnIcon={<MdDashboard color="#fff" size={"2rem"} />}
          />
          {/* ----------------- CLIENTES */}
          <ButtonRender
            BtnName="Financeru"
            BarState={NavState}
            onClick={() => {
              setCurrentSection(1);
            }}
            Selected={currentSection == 1}
            isDropDown={true}
            BtnIcon={<MdPerson color="#fff" size={"2rem"} />}
          />

          {[1, 2, 3].includes(currentSection) && NavState && (
            <>
              <ButtonDropDown
                setComponentActual={setComponentActual}
                onClick={() => setCurrentSection(2)}
                Selected={currentSection == 2}
                BtnIcon={<MdPerson color="#fff" size={"2rem"} />}
              />
              <ButtonDropDown
                setComponentActual={setComponentActual}
                onClick={() => setCurrentSection(3)}
                Selected={currentSection == 3}
                BtnIcon={<MdPerson color="#fff" size={"2rem"} />}
              />
            </>
          )}
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
