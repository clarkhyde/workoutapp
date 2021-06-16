const bookshelf = require('../bookshelf');

const Exercises = bookshelf.model('Exercises', {
    tableName: 'exercises',
});

module.exports = Exercises;