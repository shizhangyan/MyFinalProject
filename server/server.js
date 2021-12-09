"use strict";

// const fetch = require("node-fetch")
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { getRecipe, getMealImg, 
        getRecipeByNutrients, 
        getRecipeByCuisine, 
        addUserInformation, getUserByUsername,
        getUserByEmail } = require("./handlers.js/handlers");

const PORT = 8000;
const app = express()
// const calories = 2000;
app.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Methods",
        "OPTIONS, HEAD, GET, PUT, POST, DELETE"
        );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
})
app.use(morgan("tiny"))
app.use(express.static("./server/assets"))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
app.use("/", express.static(__dirname + "/"))
//EndPoint start here
app.get("/",(req,res)=>{
    res.status(200).json("Hello, this home");
})
app.get("/hello", (req,res)=>{
    res.status(200).json({hi: "hi"});
})
app.get("/recipe/:calories", getRecipe);
app.get("/mealimage/:mealId", getMealImg);
app.get("/recipebynutrients", getRecipeByNutrients);
app.get("/recipebycuisine", getRecipeByCuisine);
app.post("/user", addUserInformation);
app.get("/user/:username", getUserByUsername);
app.get("/user/email/:email", getUserByEmail);
//EndPoint end here

app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
