import React, { useState } from "react";
import {
  MdDashboard,
  MdExitToApp,
  MdPerson,
  MdAttachMoney,
  MdAccountBalanceWallet,
  MdTrendingDown,
  MdTrendingUp,
  MdTableChart,
  MdShoppingCart,
  MdInventory,
  MdSettings
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
          icon={<MdShoppingCart color="#fff" size={"2rem"}/>} 
          iconNoselected={<MdShoppingCart size={"2rem"} opacity={"50%"} color="#fff" />}
          >
            <SubButtonRenderControl 
              name="Nova Venda" 
              icon={<MdAccountBalanceWallet color="#ffffff" size={"1.5rem"}/>} 
              onClick={() => setCurrentSection(2)}
              Selected={currentSection == 2}
            />
            <SubButtonRenderControl 
              name="Relatório" 
              icon={<MdTableChart color="#ffffff" size={"1.5rem"}/>} 
              onClick={() => setCurrentSection(3)}
              Selected={currentSection == 3}
            />
          </ButtonRenderControl>
{/* ---------------------------- FINANCEIRO ---------------------------- */}
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
          icon={<MdAttachMoney color="#fff" size={"2rem"}/>} 
          iconNoselected={<MdAttachMoney size={"2rem"} opacity={"50%"} color="#fff" />}
          >
            <SubButtonRenderControl 
              name="Contas a Pagar" 
              icon={<MdTrendingDown color="#ffffff" size={"1.5rem"}/>} 
              onClick={() => setCurrentSection(4)}
              Selected={currentSection == 4}
            />
            <SubButtonRenderControl 
              name="Contas a Receber" 
              icon={<MdTrendingUp color="#ffffff" size={"1.5rem"}/>} 
              onClick={() => setCurrentSection(5)}
              Selected={currentSection == 5}
            />
          </ButtonRenderControl>
{/* ---------------------------- CLIENTES ---------------------------- */}
      <ButtonRenderControl
            isDrop={false}
            isOpen={NavState}
            onClick={() => {
              if(!NavState) NavWidthControl(false);
              setButtonExpanded(null)
              setCurrentSection(6);
            }}
            name="Clientes"
            Selected={currentSection === 6}
            icon={<MdPerson color="#fff" size={"2rem"} />}
            iconNoselected={<MdPerson size={"2rem"} opacity={"50%"} color="#fff" />}
            iconSelected={<MdPerson size={"2rem"} color="#fff" />}
          />
{/* ---------------------------- Estoque ---------------------------- */}
      <ButtonRenderControl
            isDrop={false}
            isOpen={NavState}
            onClick={() => {
              if(!NavState) NavWidthControl(false);
              setButtonExpanded(null)
              setCurrentSection(7);
            }}
            name="Estoque"
            Selected={currentSection === 7}
            icon={<MdInventory color="#fff" size={"2rem"} />}
            iconNoselected={<MdInventory size={"2rem"} opacity={"50%"} color="#fff" />}
            iconSelected={<MdInventory size={"2rem"} color="#fff" />}
          />
          
        </div>
        <div className="ExitContent">
          <ButtonRenderControl
            isDrop={false}
            isOpen={NavState}
            onClick={() => {
              if(!NavState) NavWidthControl(false);
              setButtonExpanded(null)
              setCurrentSection(8);
            }}
            name="Configurações"
            Selected={currentSection === 8}
            icon={<MdSettings color="#fff" size={"2rem"} />}
            iconNoselected={<MdSettings size={"2rem"} opacity={"50%"} color="#fff" />}
            iconSelected={<MdSettings size={"2rem"} color="#fff" />}
          />
        </div>
      </div>
    </>
  );
}

export default NavContent;
