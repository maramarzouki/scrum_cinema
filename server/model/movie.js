const mongoose = require('mongoose');

const movie_schema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    director:{
        type: String,
        required: true,       
    },
    poster:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    duration:{
        type: Number
    }
})

const movie_model = mongoose.model('Movies', movie_schema)
module.exports = movie_model;