import React, { useState } from "react";
import {
  MdDashboard,
  MdExitToApp,
  MdMoney,
  MdAttachMoney,
  MdTrendingDown,
  MdAccountBalanceWallet,
  MdTableChart
} from "react-icons/md";
import "./styles/NavContent.scss";
import ButtonRenderControl from "../GlobalComponents/NavComponents/ButtonRenderControl";
import SubButtonRenderControl from "../GlobalComponents/NavComponents/SubButtonRenderControl";

function NavContent({ currentSection, setCurrentSection }) {
  const [NavState, setNavState] = useState(true);
  const [NavScale, setNavScale] = useState("largeNav");
  const [Btntr, setBtntr] = useState("buttonopen");
  const [buttonExpanded, setButtonExpanded] = useState(null);
  const [DivBarControl, setDivBarControl] = useState("DivBarControlopen");
  function NavWidthControl(state) {
    if(state){
      setNavScale("smallNav")
      setBtntr("buttonclosed")
      setDivBarControl("DivBarControlClosed")
    }else{
      setNavScale("largeNav")
      setBtntr("buttonopen")
      setDivBarControl("DivBarControlopen")
    }
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
              if(!NavState) NavWidthControl(false);
              setButtonExpanded(null)
              setCurrentSection(0);
            }}
            name="DashBoard"
            Selected={currentSection === 0}
            icon={<MdDashboard color="#fff" size={"2rem"} />}
            iconNoselected={<MdDashboard size={"2rem"} opacity={"50%"} color="#fff" />}
            iconSelected={<MdDashboard size={"2rem"} color="#fff" />}
          />
{/* ---------------------------- VENDA ---------------------------- */}
          <ButtonRenderControl 
          isDrop={true}
          isOpen={NavState}
          isButtonExpanded={buttonExpanded == 'venda'}
          onClick={() => {
            if(!NavState) NavWidthControl(false);

            setButtonExpanded((el) => el == 'venda' ? null : 'venda')
          }}
          name="venda"
          Selected={[2,3].includes(currentSection)}
          icon={<MdAttachMoney color="#fff" size={"2rem"}/>} 
          iconNoselected={<MdAttachMoney size={"2rem"} opacity={"50%"} color="#fff" />}
          >
            <SubButtonRenderControl 
              name="Relatorio" 
              icon={<MdAccountBalanceWallet color="#ffffff" size={"1.5rem"}/>} 
              onClick={() => setCurrentSection(2)}
              Selected={currentSection == 2}
            />
            <SubButtonRenderControl 
              name="Tabela" 
              icon={<MdTableChart color="#ffffff" size={"1.5rem"}/>} 
              onClick={() => setCurrentSection(3)}
              Selected={currentSection == 3}
            />
          </ButtonRenderControl>
{/* ---------------------------- VENDA ---------------------------- */}
      <ButtonRenderControl 
          isDrop={true}
          isOpen={NavState}
          isButtonExpanded={buttonExpanded == 'financeiro'}
          onClick={() => {
            if(!NavState) NavWidthControl(false);

            setButtonExpanded((el) => el == 'financeiro' ? null : 'financeiro')
          }}
          name="Financeiro"
          Selected={[4,5].includes(currentSection)}
          icon={<MdMoney color="#fff" size={"2rem"}/>} 
          iconNoselected={<MdMoney size={"2rem"} opacity={"50%"} color="#fff" />}
          >
            <SubButtonRenderControl 
              name="Relatorio" 
              icon={<MdAccountBalanceWallet color="#ffffff" size={"1.5rem"}/>} 
              onClick={() => setCurrentSection(4)}
              Selected={currentSection == 4}
            />
            <SubButtonRenderControl 
              name="Tabela" 
              icon={<MdTableChart color="#ffffff" size={"1.5rem"}/>} 
              onClick={() => setCurrentSection(5)}
              Selected={currentSection == 5}
            />
          </ButtonRenderControl>
          
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
