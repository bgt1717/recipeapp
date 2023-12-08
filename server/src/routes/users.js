import express from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserModel } from "../models/Users.js";

const router = express.Router(); //set up router that exports an object that contains a router 

//req gets all data from API request to endpoint.
router.post("/register", async (req, res ) => {
    const {username, password} = req.body; // When making an API request in frontend, sends in an object containing username and password from the body.
    const user = await UserModel.findOne({username:username}); //Finds the username in Database if it matches the username in the request body. If the two names are the same, can be shortend to one word. 

    res.json(user); //Responds the user that was found.
});
router.post("/login");


export {router as userRouter};