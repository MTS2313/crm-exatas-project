import React from "react";
import {
  MdDashboard,
  MdShoppingCart,
  MdOutlineAttachMoney,
  MdPerson,
  MdInventory,
  MdSettings,
  MdOutlineExitToApp,
} from "react-icons/md";
import "../../assets/styles/scss/MenuContent.scss";
import ButtonComponent from "./ButtonComponent";
import LogoComponent from "./LogoComponent";
const MenuContent = () => {
  return (
    <div className="MenuContent">
        <LogoComponent />
      <div className="UserNav">
        <div className="OptionsContent">
          <ButtonComponent name={"Dashoboard"} logo={<MdDashboard color="#ffffff" size={25}/>}/>
          <ButtonComponent name={"Venda"} logo={<MdShoppingCart color="#ffffff" size={25}/>} isDrop={true}/>
        </div>
      </div>
      <button className="ExitBtn">
        <MdOutlineExitToApp color="#D57373" size={25}/>
        <p>Sair</p>
      </button>
    </div>
  );
};

export default MenuContent;
