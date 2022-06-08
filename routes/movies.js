const express = require('express');
const router = express.Router();
const Movie = require('../models/Movies');

router.get('/', async (req, res, next) => {
    try {
        const movies = await Movie.find({});
        res.render('movies', { movies } )        
    } catch (error) {
        next(error)        
    }
});

router.get('/:movieId', async (req, res, next) => {
    const { movieId } = req.params;
    try {
      const movie = await Movie.findById(movieId);
      res.render('detail', movie)
    } catch (error) {
      next(error)
    }
  })

module.exports = router;
