var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var songSchema = new Schema({
    artist: String,
    track: String,
    composer: String,
    album: String,
    genre: String,
    poster: String,
    album_poster: String,
    music: String,
    country: String,
    year: Number,
    created_at: Date,
    updated_at: Date
});

// on every save, add the date
songSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.updated_at = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.created_at) {
        this.created_at = currentDate;
    }

    next();
});

var Song = mongoose.model('Song', songSchema);

module.exports = Song;
