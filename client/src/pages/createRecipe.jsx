import React, { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";
import { useCookies} from "react-cookie";



const CreateRecipe = () => {
  const userID = useGetUserID();  //window.localStorage.getItem("userID"); <--- In the useGetUserID() function. 
  const [cookies,_] = useCookies(["access_token"]);

  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    cookingTime: 0,
    userOwner: userID,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (event, idx) => {
    const { value } = event.target;
    const ingredients = recipe.ingredients;
    ingredients[idx] = value;
    setRecipe({ ...recipe, ingredients: ingredients });
  };

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  //console.log(recipe);
const onSubmit = async (event) => {
  event.preventDefault();
  try{
    await axios.post("https://recipeapp-backend-1z7u.onrender.com/recipes", recipe,{
      headers:{authorization: cookies.access_token }, 
    });
    alert("Recipe Created");
    navigate("/");
  } catch(err){
    console.log(err);
  }
};


  return (
    <div className="create-recipe">
      <h2> create recipe</h2>
      {/* On Submit function passed in.  */}
      <form onSubmit={onSubmit}> 
        <label htmlFor="name"> Name </label>
        <input type="text" id="name" name="name" onChange={handleChange} />
        <label htmlFor="description"> Description </label>
        {recipe.ingredients.map((ingredient, idx) => (
          <input
            key={idx}
            type="text"
            name="ingredients"
            value={ingredient}
            onChange={(event) => handleIngredientChange(event, idx)}
          />
        ))}
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
        ></textarea>
        <label htmlFor="ingredients">Ingredients</label>
        <button type="button" onClick={addIngredient}>
          Add Ingredient
        </button>
        <label htmlFor="instructions"> Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          onChange={handleChange}
        ></textarea>
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          onChange={handleChange}
        />
        <label htmlFor="cookingTime">Cooking Time (Mins)</label>
        <input
          type="number"
          id="cookingTime"
          name="cookingTime"
          onChange={handleChange}
        />
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
