
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // remove?
// const morgan = require('morgan');
const { db } = require('../database/index.js');

const app = express();
app.use(cors());
app.use(express.static(`${__dirname}/../client/dist`));
// app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/** API
 *
*/
app.get('/', (req, res) => res.send('Hello World!'));

module.exports = app;
