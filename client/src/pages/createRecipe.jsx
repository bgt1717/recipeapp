import {useState} from 'react';


const[recipe, setRecipe] = useState({
  name: "",
  ingredients: [],
  instructions: "",
  cookingTime: 0,
  userOwner: 0,
});

const handleChange = (event) => {
  const{name, value} = event.target;
  setRecipe({...recipe, [name]: value})    //function sets the handleChange for each of the onChange events. which in turn changes the setRecipe hook value for each recipe.  
}

const CreateRecipe = () => {
  return (
    <div className="create-recipe">
      <h2>  create recipe</h2>
      <form>
        <label htmlFor="name"> Name </label>
        <input type = "text" id="name" name="name" onChange={handleChange} /> 
        <label htmlFor="description"> Description </label> 
        <textarea id="description" name="description" onChange={handleChange}></textarea>
        <label htmlFor="ingredients">Ingredients</label>
        
        <label htmlFor="instructions"> Instructions</label>
        <textarea id="instructions" name="instructions" onChange={handleChange}> </textarea>
        <label htmlFor="imageUrl">Image URL</label>
        <input type="text" id="imageUrl" name="imageUrl" onChange={handleChange}/>
        <label htmlFor="cookingTime">Cooking Time (Mins)</label>
        <input type="number" id="cookingTime" name="cookingTime" onChange={handleChange}/>
      </form>
    
    </div>
  )
}

export default CreateRecipe
