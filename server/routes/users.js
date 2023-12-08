import express from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router(); //set up router that exports an object that contains a router 

//req gets all data from API request to endpoint.
router.post("/register", async (req, res ) => {
    const {username, password} = req.body; // When making an API request in frontend, sends in an object containing username and password from the body.
});
router.post("/login");


export {router as userRouter};