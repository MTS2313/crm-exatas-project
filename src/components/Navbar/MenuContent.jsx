import React from "react";
import {
  MdDashboard,
  MdShoppingCart,
  MdOutlineAttachMoney,
  MdPerson,
  MdInventory,
  MdSettings,
  MdOutlineExitToApp,
  MdOutlineDescription,
  MdDescription,
} from "react-icons/md";
import "../../assets/styles/scss/Navbar/MenuContent.scss";
import ButtonComponent from "./ButtonComponent";
import DropButtonComponent from "./DropButtonComponent";
import LogoComponent from "./LogoComponent";

const MenuContent = () => {
  return (
    <div className="MenuContent">
      <LogoComponent />
      <div className="UserNav">
        <div className="OptionsContent">
          <ButtonComponent
            name={"Dashoboard"}
            logo={<MdDashboard color="#ffffff" size={25} />}
          />
          <ButtonComponent
            logo={<MdShoppingCart color="#ffffff" size={25} />}
            name="Vendas"
            isDrop={true}
            DropListAr={[<DropButtonComponent name={"Venda"} icon={<MdShoppingCart color="#ffffff" size={25}/>}/>,<DropButtonComponent name={"Relatorios"} icon={<MdOutlineDescription color="#ffffff" size={25}/>}/>]}
          />
          <ButtonComponent isDrop={true} name="Financeiro" logo={<MdOutlineAttachMoney color="#ffffff" size={25}/>} DropListAr={[<DropButtonComponent name={"Financeiro1"} icon={<MdOutlineAttachMoney color="#ffffff" size={25}/>}/>]}/>
          <ButtonComponent name={"Clientes"} logo={<MdPerson color="#ffffff" size={25}/>} isDrop={false} />
          <ButtonComponent name="Estoque" logo={<MdInventory color="#ffffff" size={25}/>} isDrop={false}/>
          <ButtonComponent name="Configurações" logo={<MdSettings color="#ffffff" size={25}/>} isDrop={false}/>
        </div>
      </div>
      <button className="ExitBtn">
        <MdOutlineExitToApp color="#D57373" size={25} />
        <p>Sair</p>
      </button>
    </div>
  );
};

export default MenuContent;
