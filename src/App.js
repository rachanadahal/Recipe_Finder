
import React, { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList';

import Detail from './Detail';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await response.json();
        setRecipes(data.meals || []);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    if (query) { // inorder to prevent fetching when encountering  empty query 
      fetchRecipes();
    }
  }, [query]); // Dependency array

  const handleViewDetail = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBack = () => {
    setSelectedRecipe(null);
  };
}
 

export default App;
