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

//------JeMin------//
// update
app.put("/bookmark/:id", async (req, res) => {
    try {
        const bookmark = await Bookmark.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(bookmark)
    } catch (error) {
        res.status(400).json({error})
    }
})

//------JeMin------//
// delete
app.delete("/bookmark/:id", async (req, res) => {
    try {
        const bookmark = await Bookmark.findByIdAndDelete(req.params.id)
        res.status(204).json(bookmark)
    } catch (error) {
        res.status(400).json({error})
    }
})


////////////////////////////
// LISTENER
////////////////////////////
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))