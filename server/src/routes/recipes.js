import express  from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/Recipes.js"; //Don't forget .js at end.

const router = express.Router();

router.get("/", async (req, res)=> {
    try{
        const response = await RecipeModel.find({}); //Finds all recipes in DB.
        res.json(response);
    }catch(err){
        res.json(err);
    }
})

router.post("/", async (req,res) =>{
    const recipe = new RecipeModel(req.body); //The post request will save the information from the body.
    try{
        const response = await recipe.save(); //Saves recipe to DB. 
        res.json(response);
    }catch(err){
        res.json(err);
    }
})



export {router as recipesRouter};