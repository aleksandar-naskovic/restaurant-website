import React, {useState}  from 'react'

import {FaClock} from "react-icons/fa"
import {MdRestaurant} from "react-icons/md"
import {FaCarSide} from "react-icons/fa"

export default function Services() {
  const [services, setServices] = useState([
    {
      icon:<MdRestaurant/>,
      title: "A BRILLIANT MENU",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corrupti!"
    },
    {
      icon:<FaCarSide/>,
      title: "FOOD DELIVERY",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corrupti!"
    },
    {
      icon:<FaClock/>,
      title: "OPEN 24 HOURS A DAY",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corrupti!"
    }
  ])
    
  
  
    return (
      <section className="services">   
        <div className="services-center">
          {services.map((item) => {
            return(             
              <article className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>       
      </section>
    )
  
}