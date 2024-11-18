import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  text-align: center;
  padding: 1rem;

  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 2rem;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
  }

  a {
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }

    .cta-buttons {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

const animationVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const Home = () => {
  return (
    <HomeContainer as={motion.div} variants={animationVariants} initial="initial" animate="animate" exit="exit">
      <h1>Welcome to Recipe Planner</h1>
      <p>Discover delicious recipes and plan your meals effortlessly!</p>
      <div className="cta-buttons">
        <Link to="/recipes">Explore Recipes</Link>
        <Link to="/meal-planner">Go to Meal Planner</Link>
      </div>
    </HomeContainer>
  );
};

export default Home;
