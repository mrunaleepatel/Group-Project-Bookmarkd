////////////////////////////
// IMPORT OUR DEPENDENCIES
////////////////////////////
// read our .env file and create environmental variables
require("dotenv").config();
// pull PORT from .env, give default value
// const PORT = process.env.PORT || 8000
const { PORT = 8000 } = process.env
// import express
const express = require("express");
// create application object
const app = express()

////////////////////////////
// ROUTES
////////////////////////////
// create a test route
app.get("/", (req, res) => {
    res.json({hello: "world"})
})

////////////////////////////
// LISTENER
////////////////////////////
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))