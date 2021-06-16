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

//GET EXERCISES BY BODYPART
router.get('/exercises/bodypart/:bodypart', (req, res) => {
    Exercises
        .where("bodyPart", req.body.bodypart)
        .fetchAll()
        .then(exercises => {
            res.status(200).json(exercises);
            console.log("sent exercises for that particular body part" + exercises);
        })
        .catch(() => {
            return res.status(404).json({ error: "ann error has occured. Please make another attempt." })
        });
});

//GET EXERCISES BY TYPE
router.get('/exercises/type/:type', (req, res) => {
    Exercises
        .where("type", req.body.type)
        .fetchAll()
        .then(exercises => {
            res.status(200).json(exercises);
            console.log("sent exercises for that particular type" + exercises);
        })
        .catch(() => {
            return res.status(404).json({ error: "ann error has occured. Please make another attempt." })
        });
})

module.exports = router;