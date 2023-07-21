const express = require('express');
const app = express();

const songRoutes = require('./src/routes/songRoutes');
const playlistRoutes = require('./src/routes/playlistRoutes');

app.use(express.json());

app.use('/', songRoutes);

app.use('/', playlistRoutes)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});