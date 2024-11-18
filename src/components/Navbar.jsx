import { motion } from 'framer-motion';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const NavbarContainer = styled.nav`
display: flex;
justify-content: space-around;
padding: 1rem;
background-color: ${({ theme }) => theme.colors.primary};
`;

const NavLink = styled(Link)`
color: white;
text-decoration: none;
font-weight: bold;

&:hover {
color: ${({ theme}) => theme.colors.secondary};
}
`
const Navbar = () => {
  return (
    <NavbarContainer as={motion.div} initial={{ y: -100 }} animate={{ y: 0}} transition={{ duration: 0.5}}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/recipes">Recipes</NavLink>
        <NavLink to="/meal-planner">Meal Planner</NavLink>
    </NavbarContainer>
  );
};

export default Navbar;