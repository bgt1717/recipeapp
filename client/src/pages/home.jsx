import { useEffect, useState, } from 'react';
import axios from "axios";
import { useGetUserID } from '../hooks/useGetUserID';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);


  const userID = useGetUserID();
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/recipes/savedRecipes/ids/${userID}`);
        setSavedRecipes(response.data.SavedRecipes || []); // Ensure savedRecipes is initialized to an empty array
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipe();
    fetchSavedRecipe();
  }, [userID]);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put("http://localhost:3001/recipes", {
        recipeID,
        userID,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  const isRecipeSaved = (id) => savedRecipes.includes(id);
  // const isRecipeSaved = (id) => Array.isArray(savedRecipes) && savedRecipes.includes(id);


  return (

    <div>

      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            {/* {Array.isArray(savedRecipes) && savedRecipes.includes(recipe._id) && <h1>Already Saved.</h1>} */}
            {/* {savedRecipes.includes(recipe._id) && <h1> ALREADY SAVED</h1>} */}
            <div>
              <h2>{recipe.name}</h2>
              <button
                onClick={() => saveRecipe(recipe._id)}
                disabled={isRecipeSaved(recipe._id)}
              >
                {" "}
                Save{" "}
              </button>
            </div>
            <div className="instructions">
              <p>{recipe.instructions}</p>
            </div>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p>Cooking Time: {recipe.cookingTime} (minutes)</p>
          </li>
        ))}
      </ul>
      home
    </div>
  )
};

export default Home
