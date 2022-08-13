import React from "react";
import "../../../assets/styles/scss/HeaderComponent/Header.scss";
import Button from "../Button/Button";
import RelatoriButton from "../RelatoriButton/RelatoriButton";
import SearchBar from "../SearchBar/SearchBar";

function Header({ PageName = String, SubPageName = String }) {
  return (
    <div className="Header">
      <div className="NamePage">
        <h1>
          {PageName}
          <span>/{SubPageName}</span>
        </h1>
      </div>
      <div className="ContentPages">
        <SearchBar
          borderColor="#2A7FFA1A"
          fontSize={20}
          color="#2A7FFAB2"
          placehName="Pesquisar"
          height={50}
          width={350}
          placeholderColor="#2A7FFAB2"
          padding="10px 20px"
          bordercolor="#2A7FFA1A"
          bordertype="solid"
          bordersize={2}
          borderR={10}
          iconSize={30}
        />
        <RelatoriButton />
        <Button
          ButtonName="Vender"
          Color="#fff"
          bgColor="#2A7FFA"
          fontSize={20}
          padding="25px 40px"
          hoveractives={false}
          heightButton={70}
        />
      </div>
    </div>
  );
}

export default Header;
