/* eslint-disable no-plusplus */
const faker = require('faker');
const { createEntry } = require('../database/controllers');

const urlOptions = ['burger', 'chicken', 'salad', 'hot-dog', 'pizza'];

const seedingScript = () => {
  let currentIndexInUrlOptionsArray = 0;
  const recursiveGenerator = (currentPid = 0) => {
    currentIndexInUrlOptionsArray = currentIndexInUrlOptionsArray > 3 ? 0 : ++currentIndexInUrlOptionsArray;
    const imgUrl = `s3://yelpphotosservice/${urlOptions[currentIndexInUrlOptionsArray]}.jpg`;
    const uId = faker.random.number({ min: 1, max: 100 });
    const text = faker.lorem.sentence();
    const tag = faker.commerce.productName();
    const bId = faker.random.number({ min: 1, max: 100 });

    createEntry(
      {
        currentPid,
        imgUrl,
        uId,
        bId,
        text,
        tag,
      },
      () => currentPid <= 10000000 && recursiveGenerator(currentPid + 1),
    );
    // const { heapTotal, heapUsed, external } = process.memoryUsage();
    console.log(currentPid, imgUrl, uId, bId, text, tag);
  };
  const start = Date.now();
  recursiveGenerator();
  const millis = Date.now() - start;
  console.log(`total seeding time = ${Math.floor(millis / 1000)}`);
};
seedingScript();

module.exports = seedingScript;
