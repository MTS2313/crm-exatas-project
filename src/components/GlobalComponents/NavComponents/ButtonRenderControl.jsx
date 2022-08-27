import React, { useState } from "react";
import PropsTypes from "prop-types";
import styled from "styled-components";
import { MdExpandMore } from "react-icons/md";
import "./styles/ButtonRender.test.scss";
function ButtonRenderControl({
  name,
  icon,
  iconNoselected,
  isDrop,
  isOpen,
  Selected,
  isButtonExpanded,
  onClick,
  children
}) {
  return isDrop ? (
    // when button is Drop
    <>
      <button
        className={`ButtonRenderControl ${!isOpen && "ButtonBgControl"} ${isButtonExpanded && "isExpanded"}`}
        onClick={onClick}
      >
        <span className="InfoBtnContent">
          {isOpen ? icon : Selected ? icon : iconNoselected}
          {isOpen && <h4 className="ButtonRenderName">{name}</h4>}
        </span>
        {isOpen ? (
          <MdExpandMore
            color="#fff"
            size={"2rem"}
            className={isButtonExpanded ? "DropOpen" : "DropClosed"}
          />
        ) : null}
      </button>

      {isButtonExpanded && isOpen && (
        <div className="DropContent">
          {children}
        </div>
      )}
    </>
  ) : (
    // When button is not Drop
    <>
      <button
        className={`ButtonRenderControl ${Selected ? "isSelected" : ""} ${
          isOpen ? "" : "ButtonBgControl"
        }`}
        onClick={onClick}
      >

        <span className="InfoBtnContent">
          {isOpen ? icon : Selected ? icon : iconNoselected}
          {isOpen && <h4 className="ButtonRenderName">{name}</h4>}
        </span>

      </button>
    </>
  );
}

export default ButtonRenderControl;
