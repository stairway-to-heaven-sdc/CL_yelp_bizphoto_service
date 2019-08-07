/* eslint-disable no-console */
const { Client } = require('pg');

const client = new Client();

client.connect();

const createEntry = (image) => {
  client.query('INSERT INTO ');
};

const insertManyIntoDb = (images, cb) => {
  Photo.collection.insert(images, err => err || cb());
};

const editEntry = () => {};

const deleteEntry = () => {};

module.exports = {
  insertManyIntoDb,
  createEntry,
  editEntry,
  deleteEntry,
};
