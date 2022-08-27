import React from 'react'

function PageIndex({name,subname}) {
  return (
    <div className="NamePage">
        <p>{name}
        {subname && <span>/{subname}</span>}
        </p>
      </div>
    )
}

export default PageIndex