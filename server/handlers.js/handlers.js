"use strict"
const fetch = require("node-fetch")
// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// get mealplanner by calories
const getRecipe = async (req, res) =>{
    const { calories } = req.params;
    const url = `https://api.spoonacular.com/mealplanner/generate?apiKey=d23530496ca84f1ba81819b1a9ae6f1a&timeFrame=day&targetCalories=${calories}`;
    const options = {
        "method": "GET",
    };
    console.log(calories);
    const response = await fetch( url, options )
    .then((res)=>res.json())
    .catch(()=>{
        console.log("error");
    });
    res.status(200).json({status: 200, data: response});
};
// get recipe's image
const getMealImg = async (req, res) =>{
    const { mealId } = req.params;
    console.log(mealId);
    const url = `https://api.spoonacular.com/recipes/${mealId}/information?apiKey=d23530496ca84f1ba81819b1a9ae6f1a&includeNutrition=false`;
    const options = {
        "method":"GET",
    };
    const response = await fetch( url, options )
            .then((res)=>res.json())
            .catch(()=>{
                console.log("error");
            });
    res.status(200).json({status: 200, image: response.image});
};

// get recipe by nutrients
const getRecipeByNutrients = async (req, res) =>{
    const nutrients = req.params; // should be used 
    const url = `https://api.spoonacular.com/recipes/findByNutrients?apiKey=d23530496ca84f1ba81819b1a9ae6f1a&minCarbs=10&maxCarbs=50&minSugar=20&maxSugar=60&number=2`;
    const options = {
        "method":"GET",
    };
    const response = await fetch( url, options )
            .then((res)=>res.json())
            .catch(()=>{
                console.log("error");
            });
    console.log(response);
    res.status(200).json({status: 200, data: response});
};
//get recipe by differrent countries(cuisine)
const getRecipeByCuisine = async (req, res) =>{
    // cuisine and number should be change according to user choice
    const cuisine = req.params;
    const url =`https://api.spoonacular.com/recipes/complexSearch?apiKey=d23530496ca84f1ba81819b1a9ae6f1a&cuisine=Chinese&number=8`;
    const options = {
        "method":"GET",
    };
    const response = await fetch( url, options )
            .then((res)=>res.json())
            .catch(()=>{
                console.log("error");
            });
    console.log(response);
    res.status(200).json({status: 200, data: response});

};

const addUserInformation = async (req, res) =>{

    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    try{
        const db = client.db('eatgood');
        const _id = uuidv4();
        const {username, firstName, lastName, email, gender, dailyCalorie,
            activity, goal, age, weight, address, postcode, country, other } = req.body;
        const newValue = {
                        _id: _id,
                        username, firstName, lastName, email, gender, dailyCalorie,
                        activity, goal, age, weight, address, postcode, country,  other,
                    };
        console.log(newValue);

        const  result = await db.collection("user").insertOne(newValue);
        client.close();
        res.status(201).json({status: 201, data: newValue, success: true});
    }
    catch(err){
        console.log(err.stack);
        res.status(500).json({status: 500, data: newValue, message: err.message});
    }
};

const getUserByUsername = async (req, res) =>{
    const { username } = req.params;
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    try{
        const db = client.db('eatgood');

        const  result = await db.collection("user").findOne({username});
        client.close();
        if( result ){
            res.status(201).json({status: 201, data: result, success: true});
        } else{
            res.status(404).json({status: 404, success: false});
        }    
    }
    catch(err){
        console.log(err.stack);
        res.status(500).json({status: 500, data: result, message: err.message});
    }   
};

const getUserByEmail = async (req, res) =>{
    const { email } = req.params;
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    try{
        const db = client.db('eatgood');

        const  result = await db.collection("user").findOne({email});
        client.close();
        if( result ){
            res.status(201).json({status: 201, data: result, success: true});
        } else{
            res.status(404).json({status: 404, success: false});
        }
    }
    catch(err){
        console.log(err.stack);
        res.status(500).json({status: 500, data: result, message: err.message});
    }   
};

module.exports = { getRecipe, getMealImg, getRecipeByNutrients, 
    getRecipeByCuisine, addUserInformation, getUserByUsername,
    getUserByEmail };