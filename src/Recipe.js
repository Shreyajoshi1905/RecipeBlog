import React from "react";
import "./App.css";

const Recipe = ({title, calories, image , ingredients}) =>{
    return(
        <div className = "recipe">
            <h2>{title}</h2>
            <ol>
            {ingredients.map(ingredient => (<li>{ingredient.text}</li>))}
            </ol>
            <p>{calories}</p>
            <img src = {image} alt = ""/>
            
        </div>

    )
}

export default Recipe;