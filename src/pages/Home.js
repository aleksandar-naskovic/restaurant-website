import React, {useContext}   from 'react'
import Banner from '../components/Banner'
import Services from '../components/Services'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
import FeaturedDish from '../components/FeaturedDish'
import Motto from '../components/Motto'
import {RecipeContext} from '../Data'


export default function Home() {
  const {recipes} = useContext(RecipeContext)

  
  
  return(
    <div>
        <Banner title="Restaurant web site"  subtitle="Restaurant app project by Aleksandar Naskovic">
          <Link to="/restaurant-website/menu" className="btn-primary">Our Menu</Link>           
        </Banner> 
        <Services/>
        <h2 className="title">Featured Dish</h2>
        <div className="featured_home">
        {recipes.slice(0, 3).map(recipe =>(
          <FeaturedDish 
            key={recipe.recipe.label}
            image={recipe.recipe.image}
            name={recipe.recipe.label}         
          />
        ))}
        </div>
        <Motto/>
        <Footer/>
    </div>
  )
}