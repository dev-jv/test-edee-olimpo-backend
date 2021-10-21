const { response, request } = require('express');
const Record = require('../models/record');

const getRatings = (req = request, res= response) => {

    const { rating = 'undefined' } = req.query;

    res.status(201).json({
        msg: 'Records obtained',
        rating: rating,
    })
};

const putRatings = (req = request, res= response) => {

    const { id } = req.params;

    res.status(201).json({
        msg: 'Record updated',
        Id: id
    })
};

const postRatings = async (req = request, res= response) => {

    const { name, email, movie, rating } = req.body;
    const record = new Record({name, email, movie, rating});
    await record.save();

    res.status(201).json({
        msg: 'The score has been recorded',
        Record: record
    })
};

module.exports = {
    getRatings,
    putRatings,
    postRatings
};
