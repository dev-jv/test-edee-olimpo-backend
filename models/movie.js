const { Schema, model } = require('mongoose');

const movieSchema = Schema({
    movie: {
        type: String,
        required: [true, 'A movie is required']
    },
})

module.exports = model( 'Movie', movieSchema );
