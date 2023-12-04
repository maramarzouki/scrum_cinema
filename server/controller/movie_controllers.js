const movie_model = require('../model/movie')


exports.add_movie = async (req, res) => {
    try {
        const { title, director, poster, description, duration } = req.body
        const newMovie = await movie_model.create({ title, director, poster, description, duration })
        res.status(200).send(newMovie)

    } catch (err) {
        res.status(500).send({ err: err.message });
    }
}

exports.get_movies = async (req, res) => {
    try {
        await movie_model.find({})
        .then(movies => {
            if(movies){
                res.status(200).send(movies);
            }else{
                res.status(404).send("Movies list is empty!");
            }
        })
    }catch (err) {
        res.status(500).send({ err: err.message });
    }
}