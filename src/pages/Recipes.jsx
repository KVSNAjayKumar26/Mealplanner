import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import MealPlanner from "./MealPlanner";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [mealPlan, setMealPlan] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.spoonacular.com/recipes/random?number=10&apiKey=b9ec23f3191d4a9a9dbd6bfc135e5ddb")
      .then((response) => setRecipes(response.data.recipes))
      .catch((error) => console.error(error));
  }, []);

  const addToMealPlan = (recipe) => {
    // Ensure no duplicates
    if (!mealPlan.some((item) => item.id === recipe.id)) {
      setMealPlan([...mealPlan, recipe]);
    } else {
      alert("This recipe is already in the meal plan!");
    }
  };

  return (
    <div>
      <h1>Recipes</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} addToMealPlan={addToMealPlan} />
        ))}
      </div>
      {/* Optional: Pass the meal plan to the MealPlanner */}
      <MealPlanner mealPlan={mealPlan} />
    </div>
  );
};

export default Recipes;
