const PlaylistService = require('../services/playlistService');

class PlaylistController {
    static getAllPlaylistSongs(req, res) {
        try {
            const { sort_by, order_by } = req.query;
            const playlistSongs = PlaylistService.getAllPlaylistSongs(sort_by, order_by);
            res.status(200).json({
                status: 'success',
                data: playlistSongs
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message
            });
        }
    }

    static getPlaylistSong(req, res) {
        try {
            const id = req.params.id;
            const songPlaylist = PlaylistService.getPlaylistSong(id);
            if (!songPlaylist) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Song not found in this playlist'
                });
            } else {
                res.status(200).json({
                    status: 'success',
                    data: songPlaylist
                });
            }
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message
            });
        }
    }

    static addPlaylistSong(req, res) {
        try {
            const { songId } = req.body;
            const playlistSongs = PlaylistService.addPlaylistSong(songId);
            res.status(201).json({
                status: 'success',
                message: 'Song added to playlist successfully',
                data: playlistSongs
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message
            });
        }
    }

    static playPlaylistSong(req, res) {
        try {
            const id = req.params.id;
            const songPlay = PlaylistService.playSong(id);
            if (!songPlay) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Song not found in this playlist'
                });
            } else {
                res.status(200).json({
                    status: 'success',
                    data: songPlay
                });
            }
        } catch (error) {
            res.status(404).json({
                status: 'error',
                message: error.message
            });
        }
    }

}

module.exports = PlaylistController;