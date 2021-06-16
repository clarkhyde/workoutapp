const express = require('express');
const router = express.Router();
const Users = require('../models/users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
require('dotenv').config();

//Register
router.post('/register', (req, res) => {
    let usernameReq = req.body.username;
    const passwordReq = req.body.password;
    const hash = bcrypt.hashSync(passwordReq, salt);
    if (usernameReq && hash) {
        new Users({
            username: req.body.username,
            password: hash
        })
            .save()
            .then(newUser => {
                res.status(200).json(newUser);
            })
    } else {
        res.status(400).send("Access Denied!");
    }
})


//Login Page
router.post('/login', (req, res) => {
    let usernameReq = req.body.username;
    let passwordReq = req.body.password;
    if (usernameReq && passwordReq) {
        Users
            .where({
                username: usernameReq
            })
            .fetch()
            .then(user => {
                bcrypt.compare(passwordReq, user.attributes.password)
                    .then(function (result) {
                        if (result) {
                            const payload = { username: usernameReq };
                            const token = jwt.sign(payload, process.env.JWT_KEY);
                            console.log(token);
                            res.status(200).json({ payload, token });
                        } else {
                            res.status(403).json({ err: "Incorrect Password" })
                        }
                    })

            })
            .catch((err) => {
                res.status(400).json({ err: "Incorrect email or password" })
            });
    };
})

module.exports = router;