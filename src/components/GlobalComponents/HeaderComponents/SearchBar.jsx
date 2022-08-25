import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
// import "./styles/SearchBar.scss";
function SearchBar({
  color,
  placehName,
  size,
  inputtextsize
}) {
  const Label = styled.label`
    display: flex;
    align-items: center;
    border: 3px solid rgba(42, 127, 250, 0.1);
    border-radius: 8px;
    cursor: text;
    .icon {
      padding: 0px 10px;
    }
    input{
      font-family: 'Inter';
      border: none;
      height: 50px;
      width: 300px;
      outline: none;
      color: ${color};
      font-size: ${inputtextsize};
    font-weight: 400;
    &::placeholder{
        font-size: ${inputtextsize};
        font-family: 'Inter';
        font-weight: 400;
        color: ${color};
      }
    }
  `;
  return (
    <Label className="SearchBar">
      <MdSearch color="#2A7FFA" fontSize={size} className="icon" rem/>
      <input className="SearchBarInput" placeholder={placehName} />
    </Label>
  );
}

export default SearchBar;
