const Movie = require('../models/movie');
const Record = require('../models/record');

const validMovie = async (movie = '') => {
    const existMovie = await Movie.findOne({ movie });
    if ( !existMovie ) {
        throw new Error(`${ movie } is not registered in the database`);
    }
}

const validIdByRecord = async ( id ) => {
    const existRecord = await Record.findById(id);
    if ( !existRecord ) {
        throw new Error(`The ID ${ id } does not exist`);
    }
}

module.exports = {
    validMovie,
    validIdByRecord
}
