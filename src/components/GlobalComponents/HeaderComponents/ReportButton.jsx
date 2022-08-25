import React from 'react'
import {MdDescription} from "react-icons/md"
import styled from 'styled-components'
function ReportButton({color,size,onClick}) {
  const Button = styled.button`
  color: ${color};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #2A7FFA05;
  border-radius:8px;
  width: 150px;
  height: 50px;
  gap: 10px;
  background: #2A7FFA05;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  :hover{
    transform: translateY(-3px);
  }
  h3{
    font-size: ${size};
    font-weight: 400;
    font-family: "inter";
  }
  `;
  return (
<Button  className="ReportButton" onClick={onClick}>
  <MdDescription color={color} size={size}/>
  <h3>Relatorio</h3>
</Button>
    )
}

export default ReportButton