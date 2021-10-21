const Movie = require('../models/movie');

const validMovie = async (movie = '') => {
    const existMovie = await Movie.findOne({ movie });
    if ( !existMovie ) {
        throw new Error(`*${ movie } is not registered in the database`);
    }
}

module.exports = {
    validMovie
}
