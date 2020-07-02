import React, {useEffect, useState, createContext} from 'react';


export const RecipeContext = React.createContext()

const Data = ({children}) => {
  const APP_ID = "b28d572d"
  const APP_KEY = "a0afc7e3d141c318678d485abdd8dec2"

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("chicken")
  

  useEffect(() => {
    getRecipes()
  }, [query])
  
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
  }
  

    
  
      
  return(
    
      <RecipeContext.Provider value={{recipes, setRecipes, setSearch, setQuery, search, query}}>
        {children}
      </RecipeContext.Provider>
  )
}

export default Data;
