import React from "react";
import "./styles/Header.scss";
import Button from "./Button";
import SearchBar from "./SearchBar";
import PageIndex from "./PageIndex";
import RelatoriButton from "./RelatoriButton";


function Header({ PageName, PageSubName }) {
  return (
    <div className="Header">
      <PageIndex name={PageName} subname={PageSubName}/>
      <div className="BtnControl">
        <SearchBar placeholder="Pesquisar"/>
        <RelatoriButton />
        <Button name="Adicionar"/>
      </div>
    </div>
  );
}

export default Header;
