import express  from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/Recipes.js"; //Don't forget .js at end.
import { UserModel } from "../models/Users.js";
import { verifyToken } from "./users.js";

const router = express.Router();

router.get("/", async (req, res)=> {
    try{
        const response = await RecipeModel.find({}); //Finds all recipes in DB.
        res.json(response);
    }catch(err){
        res.json(err);
    }
})

router.post("/", verifyToken, async (req,res) =>{
    const recipe = new RecipeModel(req.body); //The post request will save the information from the body.
    try{
        const response = await recipe.save(); //Saves recipe to DB. 
        res.json(response);
    }catch(err){
        res.json(err);
    }
})

// Save a Recipe
router.put("/", verifyToken, async (req, res) => {
    const recipe = await RecipeModel.findById(req.body.recipeID);
    const user = await UserModel.findById(req.body.userID);
    try {
      user.savedRecipes.push(recipe);
      await user.save();
      res.status(201).json({ savedRecipes: user.savedRecipes });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // Get id of saved recipes
  router.get("/savedRecipes/ids/:userID", async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.userID);
      res.status(201).json({ savedRecipes: user?.savedRecipes }); //? since it might be null.
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // Get saved recipes
router.get("/savedRecipes/:userID", async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.userID);
      const savedRecipes = await RecipeModel.find({
        _id: { $in: user.savedRecipes }, // find user id in recipe model that is in user list. 
      });
  
      console.log(savedRecipes);
      res.status(201).json({ savedRecipes });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  



export {router as recipesRouter};