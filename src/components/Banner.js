import React from 'react'


export default function Banner({title, subtitle, children}) {

   
  return(
    <div className="defaultHero">
      <div className="banner">
        <h1>{title}</h1>
        <div className="line"></div>
        <p>{subtitle}</p>
        {children}
      </div>
    </div>
  )
}