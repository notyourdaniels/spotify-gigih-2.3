const express = require('express');
const router = express.Router();

const PlaylistController = require('../controller/playlistController');

router.get('/playlist', (req, res) => {
    PlaylistController.getAllPlaylistSongs(req, res);
});

router.get('/playlist/:id', (req, res) => {
    PlaylistController.getPlaylistSong(req, res);
});

router.get('/playlist/play/:id', (req, res) => {
    PlaylistController.playPlaylistSong(req, res);
});

router.post('/playlist', (req, res) => {
    PlaylistController.addPlaylistSong(req, res);
});

module.exports = router;