let playlist = [
    {
      "id": 1,
      "playCount": 16,
      "songId": 212
    },
    {
      "id": 2,
      "playCount": 5,
      "songId": 419
    },
    {
      "id": 3,
      "playCount": 9,
      "songId": 163
    },
    {
      "id": 4,
      "playCount": 7,
      "songId": 388
    },
    {
      "id": 5,
      "playCount": 2,
      "songId": 295
    },
    {
      "id": 6,
      "playCount": 18,
      "songId": 582
    },
    {
      "id": 7,
      "playCount": 12,
      "songId": 749
    },
    {
      "id": 8,
      "playCount": 11,
      "songId": 891
    },
    {
      "id": 9,
      "playCount": 3,
      "songId": 452
    },
    {
      "id": 10,
      "playCount": 19,
      "songId": 638
    }
  ];  


class PlaylistRepository {
    constructor(id, playCount, songId) {
        this.id = id;
        this.playCount = playCount;
        this.songId = songId;
    }

    addPlaylistSong(playlistSong) {
        playlist.push(playlistSong);
        return playlistSong;
    }

    static getPlaylistSong(id) {
        const parsedId = parseInt(id, 10);
        return playlist.find(playlistSong => playlistSong.id === parsedId);
    }

    static getAllPlaylistSongs() {
        return playlist;
    }

    static addPlaylistPlayCount (id){
        const parsedId = parseInt(id, 10);
        playlist.find(playlistSong => playlistSong.id === parsedId).playCount += 1;
        return true;
    } 
}

module.exports = PlaylistRepository;