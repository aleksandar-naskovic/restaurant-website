import React   from 'react'

export default function FeaturedDish({image,name}) {

  return(
      <div class="card">
        <img src={image} alt="Dish"/>
        <div class="container">
          <h4><b>{name}</b></h4> 
          <p><b>$11 per portion</b></p> 
        </div>
      </div>
  )
}
