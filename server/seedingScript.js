const { createEntry } = require('./database/controllers');

const seedingScript = () => {
  let count = 0;
  while (count < 10000) {
    count++;
  }
};

module.exports = seedingScript;
