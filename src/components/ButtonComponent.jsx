import React from "react";
import "../assets/styles/scss/ButtonComponent.scss";
import {MdOutlineExpandMore} from "react-icons/md"
function ButtonComponent(props) {
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
      <button className="ButtonComponent">
        <div className="DivContentNameL">
          <span>{props.logo}</span>
          <p>{props.name}</p>
        </div>
        <MdOutlineExpandMore color="#ffffff" size={25}/>        
      </button>
    );
  }
}

export default ButtonComponent;
