import React, { useState } from "react";
import "./styles/ButtonComponent.scss";
import { MdOutlineExpandMore, MdShoppingCart } from "react-icons/md";
function ButtonComponent({ name=String, logo=Object, isDrop, DropListAr = [] }) {
  const [CompoentListDrop, setCompoentListDrop] = useState(null);
  const [ListState, setListState] = useState(false);
  function unFocusFunc() {
    setTimeout(() => {
      return <div className="null">uai</div>;
    }, 1000);
  }
  if (!isDrop) {
    return (
      <button className="ButtonComponent">
        <div className="DivContentNameL">
          <span>{logo}</span>
          <p>{name}</p>
        </div>
      </button>
    );
  } else {
    return (
      <button
        className="ButtonDrop"
        onFocus={() => {
          setListState(true);
        }}
        onBlur={() => {
          setListState(false);
        }}
      >
        <div className="ButtonDroplFocus">
          <div className="DivContentNameLDrop">
            <span>{logo}</span>
            <p>{name}</p>
          </div>
          <MdOutlineExpandMore color="#ffffff" size={25} className="DropIcon" />
        </div>
        {DropListAr}
      </button>
    );
  }
}

export default ButtonComponent;
