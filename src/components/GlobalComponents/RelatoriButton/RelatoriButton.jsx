import React from 'react'
import {MdDescription} from "react-icons/md"
import "./styles/RelatoriButton.scss"
function RelatoriButton() {
  return (
<div className="RelatoriButton">
    <MdDescription color='#2A7FFAB2' size={30}/>
    <h3 className="ButtonNameRel">Relatoprio</h3>
</div>
    )
}

export default RelatoriButton