// Save it in fixtures/loaddata.js
// To loaddata run: node fixtures/loaddata.js


var mongoose = require('mongoose');

var Song = require('../model/song');

mongoose.connect('mongodb://localhost/songs_2');

var data = [{
    "artist": "Randy Dominguez ",
    "track": "Warrior ",
    "album": "",
    "poster": "https://i.ytimg.com/vi/VANDG2LAFu8/maxresdefault.jpg",
    "album_poster": "http://cdn.playbuzz.com/cdn/09f8f7dd-c046-4a1f-8339-f40c0ddc786f/4b8c9c1f-ecae-4222-8318-b1f9d8ac8214.jpg",
    "officialVideo": "https://www.youtube.com/embed/QN9SduuzoC4",
    "year": 2016,
    "country": ["USA"],
    "genre": ["Action", "Heroic", "Score"],
    "composer": ["Randy Dominguez"]
}, {
    "artist": "Two Steps From Hell ",
    "track": "star sky",
    "album": "Battlecry",
    "poster": "http://www.sz0931.com/data/out/91/52656967-two-steps-from-hell-wallpaper.jpg",
    "album_poster": "https://upload.wikimedia.org/wikipedia/en/1/13/TSFH-Battlecry-Steven-R-Gilmore.jpg",
    "officialVideo": "https://www.youtube.com/embed/pICAha0nsb0",
    "year": 2015,
    "country": ["USA"],
    "genre": ["Dramatic", "Choral", "Orchestral"],
    "composer": ["Thomas Bergersen"]
}, {
    "artist": "audiomachine  ",
    "track": "When It All Falls Down",
    "album": "magnus",
    "poster": "http://audiomachine.com/wp-content/uploads/2016/08/audiomachine-Alice-in-the-Looking-Glass-Where-Epic-Music-Lives.jpg",
    "album_poster": "https://i.ytimg.com/vi/3GjNX7jcLK0/maxresdefault.jpg",
    "officialVideo": "https://www.youtube.com/embed/8uB-e9qzUjE",
    "year": 2016,
    "country": ["USA"],
    "genre": ["Dramatic", "Orchestral"],
    "composer": ["Ivan Torrent"]
}, {
    "artist": "Mitchell Miller Music ",
    "track": "Facing the Invaders",
    "album": "Howl",
    "poster": "https://i.ytimg.com/vi/tT_sag8jNf4/maxresdefault.jpg",
    "album_poster": "http://images.cdbaby.name/m/i/mitchellmillermusic.jpg",
    "officialVideo": "https://www.youtube.com/embed/tT_sag8jNf4",
    "year": 2016,
    "country": ["USA"],
    "genre": ["Action", "Orchestral"],
    "composer": ["Mitchell Miller"]
}, {
    "artist": "Really Slow Motion ",
    "track": "Dangerous Game",
    "album": "Supremacy",
    "poster": "https://f4.bcbits.com/img/0004049487_10.jpg",
    "album_poster": "http://www.trailermusicnews.com/wp-content/uploads/2016/02/really-slow-motion-supremacy.jpg",
    "officialVideo": "https://www.youtube.com/embed/WYRlcIUPRd4",
    "year": 2016,
    "country": ["USA"],
    "genre": ["Action", "Score"],
    "composer": ["Martyn Corbet"]
}, {
    "artist": "Immediate Music ",
    "track": "Moonlight",
    "album": "Quantum",
    "poster": "https://upload.wikimedia.org/wikipedia/en/e/e7/Immediate_Music_logo.jpg",
    "album_poster": "http://www.trailermusicnews.com/wp-content/uploads/2012/05/Quantum-META-cover.jpg",
    "officialVideo": "https://www.youtube.com/embed/LHRq3IcFrjw",
    "year": 2013,
    "country": ["USA"],
    "genre": ["Action", "Score"],
    "composer": []
}, {
    "artist": "Thomas-Adam Habuda ",
    "track": "Floating Skulls, Rising Souls",
    "album": "The Freak Inside",
    "poster": "https://i.ytimg.com/vi/O3xopWCS8iU/maxresdefault.jpg",
    "album_poster": "https://img.youtube.com/vi/5sJ--ye3NFY/0.jpg",
    "officialVideo": "https://www.youtube.com/embed/O3xopWCS8iU",
    "year": 2014,
    "country": [],
    "genre": ["Action", "Dramatic", "Choral"],
    "composer": ["Thomas-Adam Habuda"]
}, {
    "artist": "No Less Than Three ",
    "track": "We Shall Rule the World",
    "album": "",
    "poster": "https://img.youtube.com/vi/edOL1tO8zog/sddefault.jpg",
    "album_poster": "",
    "officialVideo": "https://www.youtube.com/embed/edOL1tO8zog",
    "year": 2015,
    "country": [],
    "genre": ["Action", "Dramatic"],
    "composer": ["Stephan Ulrich"]
}, {
    "artist": "Globus ",
    "track": "Crusaders of the Light",
    "album": "Epicon",
    "poster": "http://gregtownley.com/wp-content/uploads/2011/09/GLBRK-COVERJpeg.jpg",
    "album_poster": "http://vignette2.wikia.nocookie.net/lyricwiki/images/1/1a/Globus_-_Epicon_(2006).jpg/revision/latest?cb=20081028000508",
    "officialVideo": "https://www.youtube.com/embed/PNP9lqMVnfw",
    "year": 2008,
    "country": [],
    "genre": ["Dramatic", "Choral", "Orchestral"],
    "composer": []
}, {
    "artist": "Universal Trailer Series ",
    "track": "Deep In Hell",
    "album": "Hybrid Reborn",
    "poster": "http://naitimp3.ru/img/artist/_/1041032.jpg",
    "album_poster": "http://www.trailermusicnews.com/wp-content/uploads/2015/12/universal-trailer-series-hybrid-reborn.jpg",
    "officialVideo": "https://www.youtube.com/embed/PUqBS1IF1SM",
    "year": null,
    "country": [],
    "genre": ["Orchestral"],
    "composer": ["Gresby Race Nash"]
}, {
    "artist": "Position Music ",
    "track": "Children Of The Gods",
    "album": "Raising The Damned",
    "poster": "http://www.warnerchappellpm.com/uploads/2012/10/logo-position-music-7-cm.jpg",
    "album_poster": "",
    "officialVideo": "https://www.youtube.com/embed/CJb81WIODiU",
    "year": 2015,
    "country": [],
    "genre": ["Action"],
    "composer": ["James R. Norman", "Adam Arthur Dearborn"]
}, {
    "artist": "Brand X Music ",
    "track": "War Hammer",
    "album": "Epyllion",
    "poster": "http://brandxmusic.net/media/cache/sleeves/uploads/images/56.jpeg",
    "album_poster": "http://www.trailermusicnews.com/wp-content/uploads/2015/03/epyllion.jpeg",
    "officialVideo": "https://www.youtube.com/embed/jn9sNd_qLPg",
    "year": 2014,
    "country": [],
    "genre": ["Action", "Heroic"],
    "composer": ["Tom Gire", "John Sponsler"]
}];

data.forEach(function(item) {

    var song = new Song({
        artist: item.artist,
        track: item.track,
        composer: item.composer,
        album: item.album,
        genre: item.genre,
        poster: item.poster,
        album_poster: item.album_poster,
        officialVideo: item.officialVideo,
        country: item.country,
        year: item.year
    });

    song.save(function(err, song) {
        if (err) {
            console.log(err)
        } else {
            console.log('saved: ' + item.artist);
        }
    });
});
