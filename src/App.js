import React , {useEffect , useState} from 'react';


import './App.css';
import Recipe from './Recipe';



const App = () =>{

    
    const APP_ID = "9fb3dfb7";
    const APP_KEYS = "4528fa9c27797ead0f52cb79212b12cf";

    const [recipes , setRecipes] = useState([]);
    const [search , setSearch] = useState("");
    const [query , setQuery] = useState('chicken');
    
    useEffect(
        () => {getRecipes();} ,[query]
    )
    

    const getRecipes = async () =>{
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEYS}`);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);

    };
    
    const updateSearch = e =>
    {
        setSearch(e.target.value);
    }

    const getSearch = e =>
    {
        e.preventDefault();
        setQuery(search);
    }

    
    return(
        <div className = "App">
        <form onSubmit = {getSearch}>
        <input 
            placeholder = "fruit,vegetables...etc"
            type = "text"
            value = {search}
            onChange = {updateSearch}
            />
        <button > submit </button>
        </form>
       {recipes.map(
            recipe =><Recipe
            key = {recipe.recipe.label} 
             title = {recipe.recipe.label} 
             calories = {recipe.recipe.calories}
             image = {recipe.recipe.image}
             ingredients = {recipe.recipe.ingredients}
            />
        )}
            
        </div>
    )
}
export default App;

