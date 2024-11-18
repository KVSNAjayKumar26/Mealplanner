import React, { useState } from "react";
import styled from "styled-components";
import MealPlanCard from "../components/MealPlanCard";

const MealPlannerContainer = styled.div`
  padding: 1rem;
`;

const MealPlanList = styled.div`
  margin-top: 2rem;
`;

const MealPlanner = () => {
  const [mealPlan, setMealPlan] = useState([]);

  const removeFromMealPlan = (id) => {
    setMealPlan((prev) => prev.filter((recipe) => recipe.id !== id));
  };

  return (
    <MealPlannerContainer>
      <h1>Meal Planner</h1>
      <p>Add recipes from the Recipes page to create your meal plan!</p>
      <MealPlanList>
        {mealPlan.map((recipe) => (
          <MealPlanCard
            key={recipe.id}
            recipe={recipe}
            removeFromMealPlan={removeFromMealPlan}
          />
        ))}
      </MealPlanList>
    </MealPlannerContainer>
  );
};

export default MealPlanner;
