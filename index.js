var express = require('express');
var mongoose = require('mongoose');
var bodyParser= require('body-parser');

var Song = require('./model/song');

var app = express();


mongoose.connect('mongodb://localhost/songs_1');

app.use(bodyParser.urlencoded({extended: true}));

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 'Content-Type, X-Requested-With, authorization, X-BM-Filename');
    res.header("Access-Control-Expose-Headers", "Accept-Ranges, Content-Encoding, Content-Length, Content-Range");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
    next();
});

app.options("*", function(req, res) {
    res.send(200);
});

app.all('*', function(req, res, next) {
    setTimeout(next, 1000);
});

app.get('/songs', function(req, res) {
    Song.find({}, function(err, songs) {
        if (err) {
            res.send(404);
        } else {
            res.send(songs)
        }
    });
});

app.get('/songs/:id', function(req, res) {
    console.log(req.params);
    Song.findById(req.params.id, function(err, song) {
        if (err) {
            res.send(404);
        } else {
            res.send(song);
        }
    });
});

app.post('/songs', function(req, res) {
    console.log(req.body);
    var song = new Song({
        artist: req.body.artist,
        track: req.body.track,
        composer: req.body.composer,
        album: req.body.album,
        genre: req.body.genre,
        poster: req.body.poster,
        album_poster: req.body.album_poster,
        officialVideo: req.body.officialVideo,
        country: req.body.country,
        year: req.body.year
    });
    song.save(function(err, song) {
        if (err) {
            res.send(404);
        } else {
            res.send(song);
        }
    });
});

app.put('/songs/:id', function(req, res) {
    console.log(req.body);
    Song.findById(req.params.id, function(err, song) {
        if (err) {
            res.send(404);
        } else {
            song.artist = req.body.artist;
            song.save(function(err, song) {
                if (err) {
                    res.send(404);
                } else {
                    res.send(song);
                }
            });
        }
    });
});

app.delete('/songs/:id', function(req, res) {
    console.log(req.params);
    Song.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            res.send(404);
        } else {
            res.send({});
        }
    });
});

app.listen(5555, function(){
    console.log('Node server on port 5555');
});