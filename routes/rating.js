const { getRatings, putRatings, postRatings } = require('../controllers/ratingController');

const { Router } = require('express');
const { check } = require("express-validator");

const { validateFields } = require("../middlewares/validateFields");
const { validMovie } = require("../helpers/validateDB");

const router = Router();

router.get('/', getRatings);

router.put('/:id', putRatings);

router.post('/new', [
    check( 'name', 'Name field is empty' ).not().isEmpty(),
    check( 'name', 'Name field is too short' ).isLength({ min: 2 }),
    check( 'email', 'Email field is empty' ).not().isEmpty(),
    check( 'email', 'Invalid email' ).isEmail(),
    // check( 'movie', 'Has not selected a movie' ).not().isEmpty(),
    check( 'movie' ).custom( validMovie ),
    check( 'rating', 'Rating field is empty' ).not().isEmpty(),
    validateFields
], postRatings);

module.exports = router;
