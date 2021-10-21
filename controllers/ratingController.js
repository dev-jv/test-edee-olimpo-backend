const { response, request } = require('express');

const getRatings = (req = request, res= response) => {
    // const rtg = req.query.rating;
    const { rtg = 'undefined' } = req.query;

    res.status(201).json({
        msg: 'Records obtained',
        ranting: rtg,
    })
};

const putRatings = (req = request, res= response) => {

    const { id } = req.params;

    res.status(201).json({
        msg: 'Record updated',
        Id: id
    })
};

const postRatings = (req = request, res= response) => {

    const { name, email, movie, rating } = req.body;

    res.status(201).json({
        msg: 'The score has been recorded',
        // body,
        User: {
            Name: name,
            Email: email
        },
        Record : {
            Movie: movie,
            Rating: rating
        }
    })
};

module.exports = {
    getRatings,
    putRatings,
    postRatings
};
