const { getRecords, updateRecord, createRecord, getMovies } = require('../controllers/ratingController');

const { Router } = require('express');
const { check } = require("express-validator");

const { validateFields } = require("../middlewares/validateFields");
const { validMovie, validIdByRecord } = require("../helpers/validateDB");

const router = Router();

router.get('/', getRecords);

router.get('/movies', getMovies);

router.put('/:id', [
    check( 'id', 'Invalid ID' ).isMongoId(),
    check( 'id' ).custom( validIdByRecord),
    check( 'rating', 'Rating field is empty' ).not().isEmpty(),
    check( 'rating', 'Invalid rating' ).isIn(['1', '2', '3', '4', '5']),
    validateFields
], updateRecord);

router.post('/new', [
    check( 'name', 'Name field is empty' ).not().isEmpty(),
    check( 'name', 'Name field is too short' ).isLength({ min: 2 }),
    check( 'email', 'Email field is empty' ).not().isEmpty(),
    check( 'email', 'Invalid email' ).isEmail(),
    check( 'movie' ).custom( validMovie ),
    check( 'rating', 'Rating field is empty' ).not().isEmpty(),
    check( 'rating', 'Invalid rating' ).isIn(['1', '2', '3', '4', '5']),
    validateFields
], createRecord);

module.exports = router;
