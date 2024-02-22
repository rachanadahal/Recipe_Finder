
import React from 'react';

const RecipeList = ({ recipes, onRecipeClick,setQuery }) => {
  return (

    <div className="App">
         <input className="SearchInput"
        type="text"
       placeholder="Search recipe"
        onChange={(e) => setQuery(e.target.value)}
      />
      {recipes.map((recipe) => (
        <div className="RecipeItem" key={recipe.idMeal}>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <div className="RecipeDetails">
            <span className="MealName">{recipe.strMeal}</span>
            <button onClick={() => onRecipeClick(recipe)}>View</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;