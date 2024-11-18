import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    max-width: 100%;
    border-radius: 8px;
  }

  button {
    margin-top: 1rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const RecipeCard = ({ recipe, addToMealPlan }) => {
  return (
    <Card>
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <button onClick={() => addToMealPlan(recipe)}>Add to Meal Plan</button>
    </Card>
  );
};

export default RecipeCard;
