import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  img {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    object-fit: cover;
  }

  .details {
    flex-grow: 1;
    margin-left: 1rem;

    h3 {
      margin: 0;
      font-size: 1.1rem;
      color: ${({ theme }) => theme.colors.text};
    }
  }

  button {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const MealPlanCard = ({ recipe, removeFromMealPlan }) => {
  return (
    <Card>
      <img src={recipe.image} alt={recipe.title} />
      <div className="details">
        <h3>{recipe.title}</h3>
      </div>
      <button onClick={() => removeFromMealPlan(recipe.id)}>Remove</button>
    </Card>
  );
};

export default MealPlanCard;
