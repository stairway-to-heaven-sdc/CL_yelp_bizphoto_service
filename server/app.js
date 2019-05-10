
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { db } = require('../database/index.js');

const app = express();
app.use(cors());
app.use(express.static(`${__dirname}/../client/dist`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => res.send('Hello World!'));

module.exports = app;
