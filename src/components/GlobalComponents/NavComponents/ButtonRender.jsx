import PropTypes from "prop-types";
import React from "react";
import "../../../assets/styles/scss/Navbar/ButtonRenderDf.scss";
import {MdExpandMore} from "react-icons/md"

function ButtonRender({
  BtnName = PropTypes.string,
  BtnIcon = PropTypes.element,
  BarState = PropTypes.bool,
  onClick = PropTypes.func,
  id = PropTypes.number,
  isDropDown,
  Selected
}) {
  if (Selected) {
    console.log("to aqui", BtnName );
  }
  return (
    <button
      onClick={onClick}
      id={id}
      className={`${BarState ? "ButtonRenderDf" : "ButtonRenderDfCld"} ${Selected ? "BtnActive" : ""}`}
    >
      {/* -----------ICON  */}
      {BtnIcon}

      {BarState ? <h3 className="BtnRenderDName">{BtnName}</h3> : null}

      {/* ----------- ICON DropDown  */}
      {isDropDown && BarState && <MdExpandMore color="#fff" size={"2rem"}/>}
    </button>
  );
}

export default ButtonRender;
