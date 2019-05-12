
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { db } = require('../database/index.js');
const {
  getBizInfo, getPhotoInfo, getPhotos, getDishPhotos, getUserInfo,
} = require('../database/seeder/helper.js');

const app = express();
app.use(cors());
app.use(express.static(`${__dirname}/../client/dist`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/biz/:bId', async (req, res) => {
  try {
    const result = await getBizInfo(JSON.parse(req.params.bId));
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});
// Get photo detail by requesting pId
app.get('/biz_photo/:bId/:pId', async (req, res) => {
  try {
    const result = await getPhotoInfo(JSON.parse(req.params.pId), JSON.parse(req.params.bId));
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = app;
