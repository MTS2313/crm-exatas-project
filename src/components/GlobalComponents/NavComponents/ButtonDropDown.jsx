import { checkPropTypes } from "prop-types";
import React from "react";
import "../../../assets/styles/scss/Navbar/ButtonRenderDf.scss";

function ButtonDropDown({
  BtnName = checkPropTypes.name,
  BtnIcon = checkPropTypes.prototype,
  BarState = checkPropTypes.prototype,
  onClick
}) {  
  return (
    <button
      onClick={onClick}
      className={`${
        BarState ? "ButtonRenderDf" : "ButtonRenderDfCld"
      }`}
    >
      {BtnIcon}
      {BarState ? <h3 className="BtnRenderDName">{BtnName}</h3> : null}
    </button>
  );
}

export default ButtonDropDown;
