import { useEffect, useState, } from 'react';
import axios from "axios";
import { useGetUserID } from '../hooks/useGetUserID';
import { useCookies} from "react-cookie";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [cookies,_] = useCookies(["access_token"]);


  const userID = useGetUserID();
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get("https://recipeapp-backend-1z7u.onrender.com/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedRecipe = async () => {
      try {
        const response = await axios.get(`https://recipeapp-backend-1z7u.onrender.com/recipes/savedRecipes/ids/${userID}`);
        setSavedRecipes(response.data.SavedRecipes || []); // Ensure savedRecipes is initialized to an empty array
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipe();
    if(cookies.access_token) fetchSavedRecipe();
  }, [userID]);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put("https://recipeapp-backend-1z7u.onrender.com/recipes", {
        recipeID,
        userID,
      }, {headers:{authorization: cookies.access_token } });
      // console.log(response);
      setSavedRecipes(response.data.savedRecipes);
    } catch (err) {
      console.log(err);
    }
  }

  const isRecipeSaved = (id) => savedRecipes.includes(id);
  // const isRecipeSaved = (id) => Array.isArray(savedRecipes) && savedRecipes.includes(id);


  return (

    <div className='home'>

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
                {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
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
    </div>
  )
};

export default Home
