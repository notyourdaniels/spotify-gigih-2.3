let songs = [
  {
    "id": 212,
    "title": "Love Story",
    "artist": "Taylor Swift",
    "album": "Fearless",
    "url": "google.com/1"
  },
  {
    "id": 419,
    "title": "Just the Way You Are",
    "artist": "Bruno Mars",
    "album": "Doo-Wops & Hooligans",
    "url": "google.com/2"
  },
  {
    "id": 163,
    "title": "ILYSB",
    "artist": "LANY",
    "album": "Make Out",
    "url": "google.com/3"
  },
  {
    "id": 388,
    "title": "Bad Guy",
    "artist": "Billie Eilish",
    "album": "When We All Fall Asleep, Where Do We Go?",
    "url": "google.com/4"
  },
  {
    "id": 295,
    "title": "Shape of You",
    "artist": "Ed Sheeran",
    "album": "÷ (Divide)",
    "url": "google.com/5"
  },
  {
    "id": 582,
    "title": "Havana",
    "artist": "Camila Cabello",
    "album": "Camila",
    "url": "google.com/6"
  },
  {
    "id": 749,
    "title": "Someone Like You",
    "artist": "Adele",
    "album": "21",
    "url": "google.com/7"
  },
  {
    "id": 891,
    "title": "Counting Stars",
    "artist": "OneRepublic",
    "album": "Native",
    "url": "google.com/8"
  },
  {
    "id": 452,
    "title": "Roar",
    "artist": "Katy Perry",
    "album": "Prism",
    "url": "google.com/9"
  },
  {
    "id": 638,
    "title": "Uptown Funk",
    "artist": "Mark Ronson ft. Bruno Mars",
    "album": "Uptown Special",
    "url": "google.com/10"
  }
]

  

class SongRepository {
    constructor(id, title, artist, album, url) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.url = url;
    }

    addSong(song) {
        songs.push(song);
        return song;
    }

    static getSong(id) {
        const parsedId = parseInt(id, 10);
        return songs.find(song => song.id === parsedId);
    }

    static getAllSongs() {
        return songs;
    }
}

module.exports = SongRepository;