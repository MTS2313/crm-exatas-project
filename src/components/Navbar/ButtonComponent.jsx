import React, { useState } from "react";
import "../../assets/styles/scss/Navbar/ButtonComponent.scss";
import { MdOutlineExpandMore } from "react-icons/md";
function ButtonComponent(props) {
  const [CompoentListDrop, setCompoentListDrop] = useState(null);
  
  if (!props.isDrop) {
    return (
      <button className="ButtonComponent">
        <div className="DivContentNameL">
          <span>{props.logo}</span>
          <p>{props.name}</p>
        </div>
      </button>
    );
  } else {
    return (
      <button className="ButtonDrop">
        <div className="ButtonDroplFocus">
          <div className="DivContentNameLDrop">
            <span>{props.logo}</span>
            <p>{props.name}</p>
          </div>
          <MdOutlineExpandMore color="#ffffff" size={25} className="DropIcon" />
        </div>
      </button>
    );
  }
}

export default ButtonComponent;
