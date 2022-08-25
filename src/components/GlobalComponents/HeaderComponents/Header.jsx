import React from "react";
import "./styles/Header.scss";
import Button from "./Button";
import ReportButton from "./ReportButton";
import SearchBar from "./SearchBar";
import PageTag from "./PageTag"

function Header({ PageName, SubPageName }) {
  return (
    <div className="Header">
      <PageTag main={false} name="Produtos" subgrup="seila"/>
      <div className="ContentPages">
        <SearchBar
          size={"1.4rem"}
          color="#2A7FFAB2"
          placehName="Pesquisar"
          placeholderColor="#2A7FFAB2"
          inputtextsize={"1.1rem"}
        />
        <ReportButton size={"1.2rem"} color="#2A7FFA80" />
        <Button size="1.2rem" color="#fff" />
      </div>
    </div>
  );
}

export default Header;
