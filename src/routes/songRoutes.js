const express = require('express');
const router = express.Router();

const songController = require('../controller/songController');

router.get('/song', (req, res) => {
    songController.getAllSongs(req, res);
});
router.get('/song/:id', (req, res) => {
    songController.getSong(req, res);
});
router.post('/song', (req, res) => {
    songController.addSong(req, res);
});

module.exports = router;