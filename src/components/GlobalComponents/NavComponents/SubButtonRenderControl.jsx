import React, { useState } from "react";
import PropsTypes from "prop-types";
import styled from "styled-components";
import { MdOutlineChevronRight } from "react-icons/md";
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
