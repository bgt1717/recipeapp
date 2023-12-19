import React from 'react'

const CreateRecipe = () => {
  return (
    <div className="create-recipe">
      <h2>  create recipe</h2>
      <form>
        <label htmlFor="name"> Name </label>
        <input type = "text" id="name" /> 
        <label htmlFor="description"> Description </label> 
        <textarea id="description" name="description"></textarea>
        <label htmlFor="ingredients">Ingredients</label>
        
        <label htmlFor="instructions"> Instructions</label>
        <textarea id="instructions" name="instructions"> </textarea>
        <label htmlFor="imageUrl">Image URL</label>
        <input type="text" id="imageUrl" name="imageUrl" />
        <label htmlFor="cookingTime">Cooking Time (Mins)</label>
        <input type="number" id="cookingTime" name="cookingTime" />
      </form>
    
    </div>
  )
}

export default CreateRecipe
