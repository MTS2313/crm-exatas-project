import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import "./styles/SearchBar.scss";
import { checkPropTypes } from "prop-types";
function SearchBar({
  color = checkPropTypes.name,
  borderColor = checkPropTypes.name,
  fontSize = checkPropTypes.length,
  placehName = checkPropTypes.name,
  width = checkPropTypes.length,
  height = checkPropTypes.length,
  placeholderColor = checkPropTypes.name,
  padding = checkPropTypes.name,
  bordersize = checkPropTypes.length,
  bordertype = checkPropTypes.name,
  bordercolor = checkPropTypes.name,
  borderR = checkPropTypes.length,
  iconSize = checkPropTypes.length,
}) {
  const Input = styled.input`
    color: ${color};
    width: ${width}px;
    height: ${height}px;
    font-size: ${fontSize}px;
    &::placeholder {
      color: ${placeholderColor};
    }
  `;

  const Label = styled.label`
    padding: ${padding};
    border: ${bordersize}px ${bordertype} ${bordercolor};
    border-radius: ${borderR}px;
  `;
  return (
    <Label className="SearchBar">
      <MdSearch color="#2A7FFA" fontSize={iconSize} />
      <Input className="SearchBarInput" placeholder={placehName} />
    </Label>
  );
}

export default SearchBar;
