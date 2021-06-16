const exercisesData = require("../seed_data/exercises");

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("exercises")
        .del()
        .then(() => knex("exercises").insert(exercisesData));
};