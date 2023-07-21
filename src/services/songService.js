const SongRepository = require('../repository/songRepository');
let idCount = 0;

class SongService {
    static addSong (title, artists, album, url) {
        const song = new SongRepository(idCount, title, artists, album, url);
        idCount += 1;
        return song.addSong(song);
    }

    static getSong (id) {
        return SongRepository.getSong(id);
    }

    static getAllSongs () {
        return SongRepository.getAllSongs();
    }
}

module.exports = SongService;