const { Schema, model } = require('mongoose');

const movieSchema = Schema({
    title: {
        type: String,
        required: [true, 'A movie title is required']
    },
    year: {
        type: String,
        required: [true, 'A year is required']
    },
    genre: {
        type: String,
        required: [true, 'A genre is required']
    },
    img: {
        type: String,
        required: [true, 'A img is required']
    },
})

module.exports = model( 'Movie', movieSchema );
