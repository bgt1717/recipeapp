// const express = require("express")
import express from 'express'; //modern notation, put' "type": "module",' in package.json. Express is a framework to create API. Serves frontend. 
import cors from 'cors'; // Rules between frontend and backend.
import mongoose from 'mongoose'; // Database management system, allows queries to database. 

const app = express(); //generate version of API.

app.use(express.json()); //JSON middleware. data sent from frontend is converted into JSON with every request.
app.use(cors()); //Resolves issues with API requests with frontend.

mongoose.connect("mongodb+srv://bryce:oIsTcL1xm7UzIkLp@cluster0.jsoj83b.mongodb.net/Cluster0?retryWrites=true&w=majority") // Connects to server. 

app.listen(3001, () => console.log("server started")); //Tells API to start, has a call back function that logs server started in the console. 


 //bryce
//oIsTcL1xm7UzIkLp