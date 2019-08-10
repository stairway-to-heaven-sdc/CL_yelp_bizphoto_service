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

const createEntry = ({
  pId, imgUrl, uId, bId, text, tag,
}) => {
  client.query(
    `INSERT INTO photos VALUES (
      ${pId},
      ${imgUrl},
      ${uId},
      ${bId},
      ${text},
      ${tag}
    );`,
    (err, res) => {
      console.log(err ? err.stack : 'Success!');
      client.end();
    },
  );
};

const insertManyIntoDb = (images, cb) => {
  // console.log(`INSERT INTO photos VALUES
  // ${images.map(
  //   ({
  //     pId, imgUrl, uId, bId, text, tag,
  //   }, index, arr) => `(${pId}, '${imgUrl}', ${uId}, ${bId}, '${text}', '${tag}')${
  //     index !== arr.length - 1 ? ' ' : ';'
  //   }`,
  // )}`);

  client.query(
    `INSERT INTO photos VALUES
  ${images.map(
    ({
      pId, imgUrl, uId, bId, text, tag,
    }, index, arr) => `(${pId}, '${imgUrl}', ${uId}, ${bId}, '${text}', '${tag}')${
      index !== arr.length - 1 ? ' ' : ';'
    }`,
  )}`,
    (err, res) => {
      console.log(err ? `Postgres query ${err.stack}` : 'Success!');
      // eslint-disable-next-line no-unused-expressions
      !err && cb();
    },
  );
};

const editEntry = () => {};

const deleteEntry = () => {};

module.exports = {
  insertManyIntoDb,
  createEntry,
  editEntry,
  deleteEntry,
};
