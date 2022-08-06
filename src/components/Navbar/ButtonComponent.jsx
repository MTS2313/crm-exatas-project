import React, { useState } from "react";
import "../../assets/styles/scss/ButtonComponent.scss";
import { MdOutlineExpandMore, MdShoppingCart } from "react-icons/md";
function ButtonComponent({
  name,
  logo,
  isDrop
}) {
  const [CompoentListDrop, setCompoentListDrop] = useState(null);
  
  if (!isDrop) {
    return (
      <button className="ButtonComponent">
        <div className="DivContentNameL">
          <span>{logo}</span>
          <p>{name}</p>
        </div>
      </button>
    );
  } else {
    return (
      <button className="ButtonDrop" onClick={()=>{
        window.location.href="/Venda"
      }}>
        <div className="ButtonDroplFocus">
          <div className="DivContentNameLDrop">
            <span><MdShoppingCart color="#ffffff" size={25}/></span>
            <p>{name}</p>
          </div>
          <MdOutlineExpandMore color="#ffffff" size={25} className="DropIcon" />
        </div>
      </button>
    );
  }
}

export default ButtonComponent;
