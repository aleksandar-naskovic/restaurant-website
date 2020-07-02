import React   from 'react'
import {Link} from 'react-router-dom'

export default function Motto() {

  return(
    <div className="home-menu-bg">
      <p>We speak the good food language</p>
      <Link to="/menu" className="btn-primary">Our Menu</Link> 
    </div>
  )
}