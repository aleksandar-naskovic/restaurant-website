import React, {useContext, useEffect} from 'react'
import FeaturedDish from '../components/FeaturedDish'
import {RecipeContext} from '../Data'
import {Link} from 'react-router-dom'

export default function Menu() {
  const {recipes, search, query, setQuery, setSearch, setRecipes} = useContext(RecipeContext)
  
  const handleClick = e => {
    setQuery(e.target.value)
  }
  
  const updateSearch = e => {
    setSearch(e.target.value)
    
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }


  

  return(
    <div className="menu">
      <div className="buttons">
        <button className="menu-btn" onClick={handleClick} value="chicken">Chicken</button>
        <button className="menu-btn" onClick={handleClick} value="soup">Soup</button>
        <button className="menu-btn" onClick={handleClick} value="pizza">Pizza</button>
        <button className="menu-btn" onClick={handleClick} value="cake">Cakes</button>
      </div>
      {

      console.log(search)
      }
      
        <div className="menu-home-btn">
        <Link to="/restaurant-website" className="btn-primary">&#60; Home Page</Link> 
      </div>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder={query}/>
        <button  className="search-button" type="submit">Search</button>
      </form>
      <div className="card-menu">
        {
        recipes.map(recipe =>(
        <div className="recipes">
        <FeaturedDish 
          key={recipe.recipe.label}
          name={recipe.recipe.label} 
          image={recipe.recipe.image}
        />
        </div>
        ))}
      </div>
    </div>
  )
}