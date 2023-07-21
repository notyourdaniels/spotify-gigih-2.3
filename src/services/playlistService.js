const PlaylistRepository = require('../repository/playlistRepository');
const SongRepository = require('../repository/songRepository');

let idCount = 1;

class PlaylistService {
    static playlistSongExpand (playlistSong, song) {
        if (playlistSong.songId === song.id) {
            return { ...playlistSong, song, songId: undefined };
        } else {
            return playlistSong;
        }
    }

    static addPlaylistSong (songId) {
        if(!SongRepository.getSong(songId)){
            throw new Error('Song does not exist');
        }
        const playlistSong = new PlaylistRepository(idCount, 0, songId);
        idCount += 1;
        return playlistSong.addPlaylistSong(playlistSong);
    }

    static getPlaylistSong (id) {
        const playlistSong = PlaylistRepository.getPlaylistSong(id);
        if (!playlistSong) {
            return false;
        }
        const song = SongRepository.getSong(playlistSong.songId);
        return this.playlistSongExpand(playlistSong, song);
    }

    static getAllPlaylistSongs (sort_by, order_by) {
        const playlistList = PlaylistRepository.getAllPlaylistSongs();
        if (sort_by === "play_count") {
            playlistList.sort((a, b) => {
                if (order_by === 'asc') {
                    return a.playCount - b.playCount;
                } else {
                    return b.playCount - a.playCount;
                };
            });
        }
        
        return playlistList.map(playlistItem => {
            return this.playlistSongExpand(playlistItem, SongRepository.getSong(playlistItem.songId))
        });
    }

    static playSong (id) {
        PlaylistRepository.addPlaylistPlayCount(id);
        return this.getPlaylistSong(id);
    }
}

module.exports = PlaylistService;