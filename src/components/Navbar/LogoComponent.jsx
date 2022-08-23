import React from 'react'
import "./styles/LogoComponent.scss"
import psLogo from "../../assets/images/psLogo.png"

function LogoComponent() {
  return (
    <div className="LogoArea">
            <div className="LogoContent">
                <img src={psLogo}/>
                <h2>LOGO</h2>
            </div>
        </div>
  )
}

export default LogoComponent