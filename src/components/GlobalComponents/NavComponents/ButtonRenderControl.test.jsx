import React from "react";
import PropsTypes from "prop-types";
import styled from "styled-components";
import { MdExpandMore } from "react-icons/md";
import "../../../assets/styles/scss/NavContent/ButtonRender.test.scss";
function ButtonRenderControl({
  name = PropsTypes.string,
  icon = PropsTypes.func,
  iconSelected = PropsTypes.func,
  iconNoselected = PropsTypes.func,
  isDrop = PropsTypes.bool,
  isOpen = PropsTypes.bool,
  setComponentRender = PropsTypes.func,
  Selected = PropsTypes.bool,
  onClick = PropsTypes.func,
}) {
  const Button = styled.button``;
  return isDrop ? (
    // quando ser drop
    <>
      <button className={`ButtonRenderControl ${Selected ? "isSelected" : ""} ${isOpen ? "" : "ButtonBgControl"}`} onClick={onClick}>
        <span className="InfoBtnContent">
          {isOpen ? icon : Selected ? iconSelected : iconNoselected}
          {isOpen ? <h4 className="ButtonRenderName">{name}</h4> : null}
        </span>
        {isOpen ? <MdExpandMore color="#fff" size={"2rem"} className={Selected ? "DropOpen" : "DropClosed"}/> : null}
      </button>
    </>
  ) : (
    // quando nao ser drop
    <>
      <h1>false</h1>
    </>
  );
}

export default ButtonRenderControl;
