import { checkPropTypes } from "prop-types";
import React from "react";
import styled from "styled-components";
import "./styles/Button.scss";

function Button({
  ButtonName = checkPropTypes.name,
  Color = checkPropTypes.name,
  bgColor = checkPropTypes.name,
  hoveractives,
  padding = checkPropTypes.number | checkPropTypes.name,
  sizeName = checkPropTypes.number | checkPropTypes.name,
  ButtonFuc,
  fontSize=checkPropTypes.length,
  heightButton=checkPropTypes.length,
}) {
  const Button = styled.button`
    color: ${Color};
    padding: ${padding};
    background-color: ${bgColor};
    font-size:${fontSize}px;
    height:${heightButton}px
  `;
  return (
    <Button className="DefaultButtonComponent" onClick={ButtonFuc}>
      <p className="TitleButton">{ButtonName}</p>
    </Button>
  );
}

export default Button;
