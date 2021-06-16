const express = require('express');
const router = express.Router();
const Exercises = require("../models/exercises");




//GET ALL EXERCISES
router.get('/exercises', (req, res) => {
    Exercises
        .fetchAll()
        .then(exercises => {
            res.status(200).json(exercises);
            console.log("Sent the exercises!!!" + exercises);
        })
        .catch(() => {
            return res.status(404).json({ error: "an error has occured. Please make another attempt." })
        });
});

module.exports = router;