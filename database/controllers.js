/* eslint-disable no-console */
const { Photo } = require('../database/index');

const createEntry = (image) => {
  // add image to Mongo Image model
  const newPhoto = new Photo(image);
  newPhoto.save(err => err || console.log('success!'));
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
