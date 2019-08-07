/* eslint-disable no-console */
const { Client } = require('pg');

const client = new Client();

client.connect();

client.query(
  `CREATE TABLE IF NOT EXISTS photos (
  pId INT,
  imgUrl TEXT,
  uId INT,
  bId INT,
  text TEXT,
  tag TEXT,
)`,
  (err, res) => {
    console.log(err ? err.stack : 'Success!');
    client.end();
  },
);
