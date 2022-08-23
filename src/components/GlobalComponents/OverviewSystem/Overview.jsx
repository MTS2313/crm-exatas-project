import { checkPropTypes } from "prop-types";
import "./styles/OverViewComponent.scss";
import React from "react";
import styled  from "styled-components";
function Overview({
  overviewName = checkPropTypes.name,
  overviewValue = checkPropTypes.length,
  bgColor=checkPropTypes.name,
}) {
  const Div = styled.div`
  background:${bgColor};
  `;
  return (
    <div className="Overview">
      <Div className="ContentOverview">
        <h2>{overviewName}</h2>
        <h1>{overviewValue}</h1>
      </Div>
    </div>
  );
}

export default Overview;
