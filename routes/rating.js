const { getRatings, putRatings, postRatings } = require('../controllers/ratingController');

const { Router } = require('express');

const router = Router();

router.get('/', getRatings);

router.put('/:id', putRatings);

router.post('/new', postRatings);

module.exports = router;
