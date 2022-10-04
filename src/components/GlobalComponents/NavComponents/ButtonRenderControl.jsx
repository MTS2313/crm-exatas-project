import React, { useState, useRef } from "react";
import PropsTypes from "prop-types";
import styled from "styled-components";
import { useOutsideAlerter } from "../../utils/ClickOutside";
import { MdExpandMore } from "react-icons/md";
import "./styles/ButtonRender.test.scss";
function ButtonRenderControl({
  name,
  icon,
  iconNoselected,
  isDrop,
  isOpen,
  setButtonExpanded,
  Selected,
  isButtonExpanded,
  onClick,
  children
}) {


  const wrapperRefDropContent = useRef(null);
  useOutsideAlerter(wrapperRefDropContent, () => {
    setButtonExpanded(null)
  })
  return isDrop ? (
    // when button is Drop
    <>
      <button
        className={`ButtonRenderControl 
        ${!isOpen && "ButtonBgControl"} 
        ${isButtonExpanded && "isExpanded"}
        ${Selected ? "isSelected" : ""}`}
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

      {/* --------------- OPEN */}
      {isButtonExpanded && isOpen && (
        <div className="DropContent">
          {children}
        </div>
      )}
      {/* --------------- NOT OPEN */}
      {isButtonExpanded && !isOpen && (
        <div className="DropContentClosed" ref={wrapperRefDropContent}>
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
