import React from 'react';

function Detail({ recipe, onBack }) {
  return (
    <div>
      <h2>{recipe.strMeal}</h2>
      <p>Category: {recipe.strCategory}</p>
      <p>Area: {recipe.strArea}</p>
      <h3>Ingredients:</h3>
      {}
      <ul>
        {Array.from({ length: 20 }).map((_, index) => {
          const ingredient = recipe[`strIngredient${index + 1}`];
          const measure = recipe[`strMeasure${index + 1}`];
          return ingredient ? <li key={index}>{ingredient} - {measure}</li> : null;
        })}
      </ul>
      <p>{recipe.strInstructions}</p>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default Detail;
