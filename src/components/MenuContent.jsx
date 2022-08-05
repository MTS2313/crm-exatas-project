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
import "../assets/styles/scss/MenuContent.scss";
import ButtonComponent from "./ButtonComponent";
import LogoComponent from "./LogoComponent";
import menudata from "../assets/data/psdata.menubar.js"
const MenuContent = () => {
  return (
    <div className="MenuContent">
        <LogoComponent />
      <div className="UserNav">
        <div className="OptionsContent">
          {
            menudata.map((i)=>{
              return <ButtonComponent
            logo={<i.logocpn color="#ffffff" size={25} />}
            name={i.name}
            isDrop={i.isDrop}
          />
            })
          }
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
