/* eslint-disable no-console */
const { Photo } = require('../database/index');

const createEntry = (image, cb) => {
  // add image to Mongo Image model
  const newPhoto = new Photo(image);
  newPhoto.save(err => err || cb());
};

const editEntry = () => {};

const deleteEntry = () => {};

module.exports = {
  createEntry,
  editEntry,
  deleteEntry,
};
