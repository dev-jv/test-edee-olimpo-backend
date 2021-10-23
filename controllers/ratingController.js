const { response, request } = require('express');
const Record = require('../models/record');
const Movie = require('../models/movie');

const getRecords = async (req = request, res= response) => {

    const { rating } = req.query;
    let records;

    if (!rating) {
        records = await Record.find();
    } else {
        records = await Record.find({ rating });
    }
    const elements = await Record.countDocuments();

    res.status(201).json({
        msg: 'Records obtained',
        elements,
        records
    })
};

const updateRecord = async (req = request, res= response) => {

    const { id } = req.params;
    const { rating } = req.body;
    const record = await Record.findByIdAndUpdate(id, { rating }, { new:true });

    res.status(201).json({
        msg: 'Record updated',
        record
    })
};

const createRecord = async (req = request, res= response) => {

    const { name, email, movie, rating } = req.body;
    const record = new Record({ name, email, movie, rating });
    await record.save();

    res.status(201).json({
        msg: 'The score has been recorded',
        record
    })
};

const getMovies = async (req = request, res= response) => {

    const movies = await Movie.find();
    const elements = await Movie.countDocuments();

    res.status(201).json({
        msg: 'Records obtained',
        elements,
        movies
    })
};

module.exports = {
    getRecords,
    updateRecord,
    createRecord,
    getMovies
};
