
import { createContext, useState, useEffect, useContext } from "react"

export const GlobalContext = createContext({})

export const GlobalContextProvider = ({children}) => {
    let themeLocalStorage = localStorage?.getItem('theme')
    const [theme, setTheme] = useState(themeLocalStorage ? themeLocalStorage : 0)
    // default language
      let defaultLanguage= 'PT-BR' 
      const [language, setLanguage] = useState(() => {
          const langFromLocalStorage = window.localStorage.getItem("lang");

          return langFromLocalStorage ? langFromLocalStorage : defaultLanguage;
      });

    useEffect(() => {
        localStorage.setItem('theme', theme)
    },[theme])


        useEffect(() => {
            const langFromLocalStorage = window.localStorage.getItem("lang");
            if(langFromLocalStorage != language){
            window.localStorage.setItem("lang", language)
            location.reload()
            }
        },[language])
    
    return (
        <GlobalContext.Provider
                value={{
                    theme, 
                    setTheme,
                    language, 
                    setLanguage
                }}>

            {children}
        </GlobalContext.Provider>
    )
}


export function useGlobal(){
    const context = useContext(GlobalContext)
    const {theme, setTheme, language, setLanguage} = context
    return {
        theme, 
        setTheme,
        language, 
        setLanguage
    }

}
