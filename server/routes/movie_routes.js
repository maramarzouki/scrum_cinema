const movie_controllers = require('../controller/movie_controllers')
const Router = require('express');
const router = Router();

router.post('/addMovie', movie_controllers.add_movie);
router.get('/getMovies', movie_controllers.get_movies);

module.exports = router;
