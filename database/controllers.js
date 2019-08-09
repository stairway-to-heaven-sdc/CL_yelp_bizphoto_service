/* eslint-disable no-console */
const { Client } = require('pg');

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
  client.query(
    `INSERT INTO photos VALUES
      ${images.forEach(({
    pId, imgUrl, uId, bId, text, tag,
  }, index, arr) => (index !== arr.length - 1
    ? `(${pId}, ${imgUrl}, ${uId}, ${bId}, ${text}, ${tag}),`
    : `(${pId}, ${imgUrl}, ${uId}, ${bId}, ${text}, ${tag});`))}
    `,
    (err, res) => {
      console.log(err ? err.stack : 'Success!');
      // eslint-disable-next-line no-unused-expressions
      !err && cb();
      client.end();
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
