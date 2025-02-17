const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const movieSchema = new Schema({
    title: {type: String},
    director: String,
    image: String,
    description: String,
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie;