import React, { useState } from "react";
import "../assets/styles/scss/ButtonComponent.scss";
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
        {props.isDropList.map((i)=> {
          return <h2>{i.name}</h2>
        })}
      </button>
    );
  }
}

export default ButtonComponent;
