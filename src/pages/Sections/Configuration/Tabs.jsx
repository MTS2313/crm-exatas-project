import { useContext } from "react";
import { useGlobal } from "../../../context/GlobalContext";
import themes from "../../../assets/data/navbar.theme";

const SelectInput = ({ options, label, onChange, valueDefault }) => {
  return (
    <div style={{ width: "300px" }} className="modalInput">
      <p>{label}</p>
      <select
        className="modalTextField"
        onChange={onChange}
        defaultValue={valueDefault}
        placeholder={label}
      >
        {options.map((el) => (
          <option value={el}>{el}</option>
        ))}
      </select>
    </div>
  );
};

export const Tab0 = () => {
  let languageOptions = ["PT-BR", "EN"];
  let themesOptions = ["Claro", "Escuro"];
  const { language, setLanguage } = useGlobal();

  // --------------- ON change event
  function onChangeLanguage(e) {
    let { value } = e.target;
    setLanguage(value);
  }

  return (
    <div className="container-configuration--tab">
      <SelectInput
        options={languageOptions}
        label={"Language"}
        onChange={onChangeLanguage}
        valueDefault={language}
      />
      <SelectInput options={themesOptions} label={"Tema"} />
    </div>
  );
};

export const Tab1 = () => {
  const { theme, setTheme } = useGlobal();

  function onChageTheme(index){
    setTheme(index)
  }

  return (
    <div className="container-configuration--tab">
      <div className="row">
        {themes.map((themeBackground, index) => (
          <div
            className={`container-theme ${theme == index && "active"}`}
            style={themeBackground}
            role="button"
            onClick={() => onChageTheme(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};
