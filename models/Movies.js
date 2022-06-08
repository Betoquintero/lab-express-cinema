const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: String
  },
  stars: {
    type: [String],
  },
  image: {
    type: String,
    default: 'https://www.formate.es/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png'
  }, 
  description: {
    type: String,
  },
  showtimes: {
    type: [String]
  }
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;