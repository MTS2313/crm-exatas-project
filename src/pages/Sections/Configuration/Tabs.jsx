import { useContext } from "react"
import { LanguageContext } from "../../../Routes"

const SelectInput = ({options, label, onChange, valueDefault}) => {
    return (
        <div style={{'width': '300px'}} className="modalInput">
            <p>{label}</p>
            <select className="modalTextField" onChange={onChange} defaultValue={valueDefault} placeholder={label}>
                {options.map(el => (
                    <option value={el}>{el}</option>
                ))}
            </select>
        </div>
        )
}

export const Tab0 = () => {
        let languageOptions = ['PT-BR','EN']
        let themesOptions = ['Claro','Escuro']
        const {language, setLanguage} = useContext(LanguageContext)

        // --------------- ON change event
        function onChangeLanguage(e){
            let {value} = e.target
            setLanguage(value)
        }



        

        return (
            <div className="container-configuration--tab">
                <SelectInput options={languageOptions} label={'Language'} onChange={onChangeLanguage} valueDefault={language} />
                <SelectInput options={themesOptions} label={'Tema'} />
            </div>
        )
    }


export const Tab1 = () => {
        return (
            <div className="container-configuration--tab">
                H1
            </div>
        )
}