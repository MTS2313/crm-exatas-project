import React from 'react'
import {MdDescription} from "react-icons/md"
import "./styles/RelatoriButton.scss"
function RelatoriButton() {
  return (
<div className="RelatoriButton">
    <MdDescription size={"1.6rem"}/>
    <p className="ButtonNameRel">Relatorio</p>
</div>
    )
}

export default RelatoriButton