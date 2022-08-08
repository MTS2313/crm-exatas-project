import { checkPropTypes } from "prop-types";
import React from "react";
import "../../../assets/styles/scss/GlobalComponents/OverviewComponent.scss"
function Overview({
overviewName=checkPropTypes.name,
overviewValue=checkPropTypes.length,
}) {
  return (
    <div className="Overview">
      <div className="ContentOverview">
        <h2>{overviewName}</h2>
        <h1>{overviewValue}</h1>
      </div>
    </div>
  );
}

export default Overview;
