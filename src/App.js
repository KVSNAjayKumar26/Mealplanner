import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import MealPlanner from './pages/MealPlanner'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/meal-planner' element={<MealPlanner />} />
      </Routes>
    </Router>
  )
}

export default App