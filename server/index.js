require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.options("*", cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;
const usersRoute = require('./routes/users');
const exercisesRoute = require('./routes/exercises');

app.use("/", usersRoute);
app.use("/", exercisesRoute);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});