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
const MenuContent = () => {
  return (
    <div className="MenuContent">
        <LogoComponent />
      <div className="UserNav">
        <div className="OptionsContent">
          <ButtonComponent
            logo={<MdDashboard color="#ffffff" size={25} />}
            name={"Dashoboard"}
            isDrop={false}
          />
          <ButtonComponent
            name="Venda"
            logo={<MdShoppingCart color="#ffffff" size={25} />}
          />
          <ButtonComponent
            name="Financeiro"
            logo={<MdOutlineAttachMoney color="#ffffff" size={25} />}
          />
          <ButtonComponent
            name="Clientes"
            logo={<MdPerson color="#ffffff" size={25} />}
          />
          <ButtonComponent
            name="Estoque"
            logo={<MdInventory color="#ffffff" size={25} />}
          />
          <ButtonComponent
            name="configurações"
            logo={<MdSettings color="#ffffff" size={25} />}
          />
        </div>
      </div>
      <ButtonComponent logo={<MdOutlineExitToApp color="red" size={25} />} />
    </div>
  );
};

export default MenuContent;
