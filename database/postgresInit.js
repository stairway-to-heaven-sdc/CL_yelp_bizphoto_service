/* eslint-disable no-console */
const { Client } = require('pg');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const client = new Client({
  user: process.env.DB_USER,
  host: 'localhost',
  password: process.env.DB_PASSWORD,
  port: 5432,
  database: 'postgres',
});
client.connect();

console.log('Connected!');

client.query(
  `CREATE TABLE IF NOT EXISTS photos (
    pId INT,
    imgUrl TEXT,
    uId INT,
    bId INT,
    text TEXT,
    tag TEXT
  );`,
  (err, res) => {
    console.log(err ? err.stack : 'Success!');
    client.end();
  },
);
