import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  
import Auth from './pages/auth';
import Home from './pages/home';
import CreateRecipe from './pages/createRecipe';
import SavedRecipes from './pages/savedRecipes';



function App() {

  return (
    <>
    <Router>
      <Routes>
        {/* Element is the component that is rendered when going to path.  */}
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
        <Route path="/saved-recipes" element={<SavedRecipes />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
