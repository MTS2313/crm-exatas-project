import React from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";
function Button({ name, color, size, onClick }) {
  const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 150px;
    border: none;
    border-radius: 9px;
    cursor: pointer;
    gap: 5px;
    color: ${color};
    background-color: #2a7ffa;
    transition: 0.3s ease-in-out;
    :hover {
      transform: translateY(-3px);
    }
    h3 {
      font-size: ${size};
      font-weight: 400;
      font-family: "inter";
    }
  `;
  return (
    <Button className="DefaultButtonComponent" onClick={onClick}>
      <MdAdd color="#fff" size={"1.5rem"} />
      <h3>Adicionar</h3>
    </Button>
  );
}

export default Button;
