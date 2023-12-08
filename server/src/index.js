// const express = require("express")
import express from 'express'; //modern notation, put' "type": "module",' in package.json. Express is a framework to create API. Serves frontend. 
import cors from 'cors'; // Rules between frontend and backend.
import mongoose from 'mongoose'; // Database management system, allows queries to database. 

import { userRouter } from './routes/users.js';


const app = express(); //generate version of API.

app.use(express.json()); //JSON middleware. data sent from frontend is converted into JSON with every request.
app.use(cors()); //Resolves issues with API requests with frontend.

app.use("/auth", userRouter); // Seperating code to write endpoints related to authentication will exist in users.js

//bryce
//oIsTcL1xm7UzIkLp
mongoose.connect("mongodb+srv://bryce:oIsTcL1xm7UzIkLp@cluster0.jsoj83b.mongodb.net/Cluster0?retryWrites=true&w=majority") // Connects to server. 
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.error('MongoDB connection error:', error));

app.listen(3001, () => console.log("server started")); //Tells API to start, has a call back function that logs server started in the console. 

