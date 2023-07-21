const SongService = require('../services/songService');

class SongController {
    static getSong(req, res) {
        try {
            const id = req.params.id;
            const song = SongService.getSong(id);
            if (!song) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Song not found'
                });
            } else {
                res.status(200).json({
                    status: 'success',
                    data: song
                });
            }
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message
            })
        };
    }
    
    static getAllSongs(req, res) {
        try {
            const songs = SongService.getAllSongs();
            res.status(200).json({
                status: 'success',
                data: songs
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message
            });
        }
    }

    static addSong(req, res) {
        try { 
            const { title, artists, album, url } = req.body;
            const song = SongService.addSong(title, artists, album, url);
            res.status(201).json({
                status: 'success',
                message: 'Song added successfully',
                data: song
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message
            });
        }
    }
}

module.exports = SongController;