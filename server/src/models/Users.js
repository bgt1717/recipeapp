import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({ //Schema an object that defines structure of data.
    username:{type: String, required: true, unique:true}, //username field that must be a string, it is required to be a string and must be unique. 
    password: {type: String, required: true},
    savedRecipes: [{type: mongoose.Schema.Types.ObjectId, ref: "recipes"}], //Reference to recipes table. 
});

export const UserModel = mongoose.model("users", UserSchema) //Model generated based off schema. Setting Schema to be a collection. "users" is called from the database.