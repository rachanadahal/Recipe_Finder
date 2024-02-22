import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
        );
        const data = await response.json();
        setRecipes(data.meals || []);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [searchQuery]); // Fetch recipes whenever the search query changes

  const handleViewDetail = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBack = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="App">
      <h1 className="App-title">Recipe Finder</h1>
      <div className="SearchContainer">
        <input
          className="SearchInput"
          type="text"
          placeholder="Search recipes"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {recipes.map((recipe) => (
        <div className="RecipeItem" key={recipe.idMeal}>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <div className="RecipeDetails">
            <span className="MealName">{recipe.strMeal}</span>
            <button onClick={() => handleViewDetail(recipe)}>View</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
