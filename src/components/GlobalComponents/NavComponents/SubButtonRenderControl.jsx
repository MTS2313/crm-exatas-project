import React from "react";
import "./styles/ButtonRender.test.scss";
function ButtonRenderControl({
  name,
  icon,
  Selected,
  onClick
}) {
  return (
      <button 
      className={`ButtonRenderControl SubButton ${Selected && "isSelected"}`}
      onClick={onClick}>
        <span className="InfoBtnContent">
          {icon}
          <h4 className="ButtonRenderName">{name}</h4>
        </span>
      </button>
      )
}

export default ButtonRenderControl;
