import React from "react";

function DropButtonComponent({
    icon,
    name
}) {
  return (
    <div className="DropButtonContent">
      <div className="DropControlBtn">
        {icon}
        <p>{name}</p>
      </div>
    </div>
  );
}

export default DropButtonComponent;
