import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import "./styles/SearchBar.scss";
function SearchBar({
  placeholder,
  value,
}) {
  return (
    <label className="SearchBar">
      <MdSearch color="#2A7FFA" size={"1.8rem"} />
      <input className="SearchBarInput" placeholder={placeholder} value={value}/>
    </label>
  );
}

export default SearchBar;
