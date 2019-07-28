/* eslint-disable no-plusplus */
const faker = require('faker');
const { insertManyIntoDb } = require('../database/controllers');

const urlOptions = ['burger', 'chicken', 'salad', 'hot-dog', 'pizza'];

const seedingScript = () => {
  let currentIndexInUrlOptionsArray = 0;
  let pId = 0;
  const tenKLoop = () => {
    let tenKEntries = [];
    for (let i = 0; i < 10000; i++) {
      pId++;

      // Fake data:
      currentIndexInUrlOptionsArray = currentIndexInUrlOptionsArray > 3 ? 0 : ++currentIndexInUrlOptionsArray;
      let imgUrl = `s3://yelpphotosservice/${urlOptions[currentIndexInUrlOptionsArray]}.jpg`;
      let uId = faker.random.number({ min: 1, max: 100 });
      let text = faker.lorem.sentence();
      let tag = faker.commerce.productName();
      let bId = faker.random.number({ min: 1, max: 100 });

      tenKEntries.push({
        pId,
        imgUrl,
        uId,
        bId,
        text,
        tag,
      });

      console.log(pId, imgUrl, uId, bId, text, tag);

      imgUrl = null;
      uId = null;
      text = null;
      tag = null;
      bId = null;
    }
    
    insertManyIntoDb(tenKEntries, () => {
      tenKEntries = [];
      global.gc();
      // eslint-disable-next-line no-unused-expressions
      pId < 10000000 && tenKLoop();
    });
  };

  const start = Date.now();
  tenKLoop();
  const millis = Date.now() - start;
  console.log(`total seeding time = ${Math.floor(millis / 1000)} seconds`);

  // const { heapTotal, heapUsed, external } = process.memoryUsage();
};
seedingScript();

module.exports = seedingScript;
