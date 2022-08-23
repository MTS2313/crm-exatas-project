import React, { useState } from "react";
import PropsTypes from "prop-types";
import styled from "styled-components";
import { MdExpandMore } from "react-icons/md";
import "../../../assets/styles/scss/NavContent/ButtonRender.test.scss";
function ButtonRenderControl({
  name,
  icon,
  iconNoselected,
  isDrop,
  isOpen,
  Selected,
  onClick,
  dropdata = [],
  onClickDrop,
  SelectedDrop,
}) {
  const [dropState, setdropState] = useState(false);

  return isDrop ? (
    // quando ser drop
    <>
      <button
        className={`ButtonRenderControl ${Selected ? "isSelected" : ""} ${
          isOpen ? "" : "ButtonBgControl"
        }`}
        onClick={onClick}
      >
        <span className="InfoBtnContent">
          {isOpen ? icon : Selected ? icon : iconNoselected}
          {isOpen ? <h4 className="ButtonRenderName">{name}</h4> : null}
        </span>
        {isOpen ? (
          <MdExpandMore
            color="#fff"
            size={"2rem"}
            className={Selected ? "DropOpen" : "DropClosed"}
          />
        ) : null}
      </button>

      {Selected ? (
        <div className="DropContent">
          
        </div>
      ) : null}
    </>
  ) : (
    // quando nao ser drop
    <>
      <button
        className={`ButtonRenderControl ${Selected ? "isSelected" : ""} ${
          isOpen ? "" : "ButtonBgControl"
        }`}
        onClick={onClick}
      >
        <span className="InfoBtnContent">
          {isOpen ? icon : Selected ? icon : iconNoselected}
          {isOpen ? <h4 className="ButtonRenderName">{name}</h4> : null}
        </span>
      </button>
    </>
  );
}

export default ButtonRenderControl;
