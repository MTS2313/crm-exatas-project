import React from "react";
import "./styles/Button.scss";
import {MdAdd} from "react-icons/md"
function Button({ name, onClick }) {
  return (
    <button className="DefaultButtonComponent" onClick={onClick}>
      <MdAdd color="#fff" />
      <p className="TitleButton">{name}</p>
    </button>
  );
}

export default Button;
