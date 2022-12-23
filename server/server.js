require('dotenv').config();
const express = require('express');
const cors = require("cors");
const axios = require('axios');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

const flickrPath = 'https://www.flickr.com/services/rest/';

app.get('/api/photosets', async (req, res) => {
    const fetchUrl = `${flickrPath}?method=flickr.photosets.getList&format=json&nojsoncallback=1&api_key=${process.env.FLICKR_API_SECRET}&user_id=${process.env.FLICKR_USER_ID}&primary_photo_extras=url_m`;
    const photosets = await axios(fetchUrl);
    res.json(photosets.data.photosets);
});

app.get('/api/photoset', async (req, res) => {
    let fetchUrl = `${flickrPath}?method=flickr.photosets.getPhotos&format=json&nojsoncallback=1&api_key=${process.env.FLICKR_API_SECRET}&user_id=${process.env.FLICKR_USER_ID}&photoset_id=${req.query.photoset_id}&extras=url_m,url_o`;
    const photoset = await axios(fetchUrl);
    res.json(photoset.data);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});