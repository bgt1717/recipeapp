import mongoose from "mongoose";

const RecipesSchema = new mongoose.Schema({ //Schema an object that defines structure of data.
    name:{type: String, 
        required: true, 
    }, 
    ingredients: [{type: String, required: true}], //Wrap the string in brackets to tell MongoDB this is an array of strings. 
    instructions:  {type: String, required: true},
    imageUrl: {type: String, required: true},
    cookingTime: { type: Number, required: true},
    userOwner: {type: mongoose.Schema.Types.ObjectId, ref: "users", required: true} //Refers to ID of user who created the recipe. Makes a reference to the users table. Is required.
});

export const RecipeModel = mongoose.model("recipes", RecipesSchema) //Model generated based off schema. Setting Schema to be a collection. 
