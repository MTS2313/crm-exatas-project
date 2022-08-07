import { checkPropTypes } from "prop-types";
import React from "react";
import styled from "styled-components";
import "../../../assets/styles/scss/GlobalComponents/Button.scss";

function Button({
  ButtonName = checkPropTypes.name,
  Color = checkPropTypes.name,
  bgColor = checkPropTypes.name,
  hoveractives,
  padding = checkPropTypes.number | checkPropTypes.name,
  sizeName = checkPropTypes.number | checkPropTypes.name,
  ButtonFuc,
}) {
  const Button = styled.button`
    color: ${Color};
    padding: ${padding};
    color: ${Color};
    background-color: ${bgColor};
  `;
  return (
    <Button className="DefaultButtonComponent" onClick={ButtonFuc}>
      <p className="TitleButton">{ButtonName}</p>
    </Button>
  );
}

export default Button;
