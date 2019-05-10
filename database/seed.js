const faker = require('faker');
// const fs = require('fs');
const _ = require('lodash');
const { db, Biz, photo } = require('./index');
// create the real one first
const generateBiz = () => {
  const BizData = [];
  const first = [
    'Anchor', 'Bon', 'Chon', 'Buffalo', 'Wild', 'Chicken', 'Salad', 'Dell', 'Rhea\'s', 'Grandy\'s', 'Gus\'s', 'World',
    'Famous', 'Fried', 'Lee\'s', 'Ma', 'Yu', 'Ching\'s', 'Bucket', 'Pollo', 'Ranch', 'Rostipollos', 'Roscoe\'s', 'House of',
    'Slim', 'Smithfield\'s', 'St.', 'Swiss', 'Tip-Top', 'White', 'Coffee', 'Fence', 'Wing', 'American', 'Boston', 'Famous',
    'Brown\'s', 'California', 'Rice', 'Cluck', 'Dixie', 'Lee', 'Flav\'s', 'Golden', 'Hillbilly\'s', 'Kennedy', 'Kyochon',
    'Louisiana', 'Los Pollos', 'Nando\'s', 'Mrs.', 'Winner\'s', 'Pioneer', 'Raising', 'Red', 'Roy', 'Royal', 'Southern',
    'Tastee', 'Wild', 'Wing',
  ];

  const second = [
    'Recipe', 'Street', 'Zone', 'Castle', 'Loco', 'Hermanos', 'Skillet', 'International', 'Blast', 'Cottage',
    'Delight', 'Express', 'Hut', 'Licken', 'Rotisserie', 'Shop', '& Pasta', 'Market', '\'n Biscuits', 'Bar',
    'Chicken', 'Wings', 'Chick', 'Inn', 'Way', 'Basket', 'House', 'Tropical', 'and Waffles', 'Chickens',
    'Bar-B-Q', 'BBQ', 'Chalet', 'Restaurant', 'Pot', 'Farm',
  ];
  const typeOne = [
    'Canjun/Creole', 'American', 'African', 'Japanese', 'Korean', 'Halal', 'Asian Fusion', 'Tex-Mex', 'Mexican', 'Taiwanese',
    'Vietnamese', 'Chinese', 'Indian', 'Italian', 'Filipino', 'Mediterranean', 'Caribbean', 'Pakistani', 'Thai', 'Indonesian',
    'Kosher', 'Latin American', 'Germany', 'Russian', 'French', 'Middle Eastern', 'Southern', 'Fast food', 'Gluten-free',
    'Salvadoran', 'Greek',
  ];
  const typeTwo = [
    'Hookah Bars', 'Hot pot', 'Dounts', 'Sandwiches', 'Pizza', 'Burgers', 'Coffee & Tea', 'Bakeries', 'Nightlife',
    'Seafood', 'Chicken Wings', 'Bubble Tea', 'Wine Bars', 'Noodles', 'Buffets', 'Cupcakes', 'Shaved Ice', 'Salad',
    'Grocery', 'Bars', 'Desserts', 'Ice Cream & Frozen Yogurt', 'Beer, Wine & Spirits', 'Soup', 'Macarons', 'Wraps',
    'Food Stands', 'Hot Dogs', 'Tacos', 'Karaoke', 'Acai Bowls', 'Cocktail Bars', 'Gelato', 'Lounges', 'Caterers',
    'Cafes', 'Breakfast & Brunch', 'Juice Bars & Smoothies', 'Delis',
  ];
  // sampledata:
  const sampleData = {
    bid: 1,
    bizname: 'Taste of Texas',
    reviewCount: 1380,
    rating: 4.5,
    price: '$$$',
    category: ['Steakhouses', 'Wine Bars'],
    location: {
      address1: '10505 Katy Fwy',
      address2: 'Ste 2',
      city: 'Houston',
      state: 'TX',
      zipcode: '77024',
      latitude: 29.7827412984213,
      longitude: -95.556758998672,
    },
    phone: '(713) 932-6901',
    url: 'tasteoftexas.com',
    photos: [
      1, 2, 3,
    ],
  };
  BizData.push(sampleData);
  for (let bid = 2; bid <= 100; bid += 1) {
    let name = '';
    const length = Math.ceil(Math.random() * 2 + 1);
    for (let i = 0; i < length; i += 1) {
      if (i === length - 1) {
        name += _.sample(second);
      } else {
        name += `${_.sample(first)} `;
      }
    }
    const type = [];
    type.push(_.sample(typeOne));
    type.push(_.sample(typeTwo));
    const bizname = name;
    const reviewCount = faker.random.number(8000);
    const rating = faker.random.arrayElement([1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]);
    const price = faker.random.arrayElement(['$', '$$', '$$$', '$$$$', '$$$$$']);
    const category = type;
    const phone = faker.phone.phoneNumberFormat(1);
    const url = faker.internet.url();
    const photos = [1, 2, 3];
    const address1 = faker.address.streetAddress();
    const address2 = faker.address.secondaryAddress();
    const city = faker.address.city(3);
    const state = faker.address.stateAbbr();
    const zipcode = faker.address.zipCode('#####');
    const latitude = Number(faker.address.latitude());
    const longitude = Number(faker.address.longitude());
    const locObj = {
      address1,
      address2,
      city,
      state,
      zipcode,
      latitude,
      longitude,
    };

    BizData.push({
      bid,
      bizname,
      reviewCount,
      rating,
      price,
      category,
      location: locObj,
      phone,
      url,
      photos,
    });
  }

  // return { data: Biz };
  return BizData;
};

const generatePhoto = () => {
  let photos = [];
  const samplePhoto = [
    {
      pid: 1,
      imgUrl: 'https://s3-media4.fl.yelpcdn.com/bphoto/J3kWrFK9vE5oBgREBJ1YQg/o.jpg',
      userName: 'hibow',
      userAv: faker.internet.avatar(),
      text: 'It is yummy!!!',
      tag: 'Tomahawk Ribeye',
    },
    {
      pid: 2,
      imgUrl: 'https://s3-media3.fl.yelpcdn.com/bphoto/L38qQjyzPvt53aJ5sTj4sg/o.jpg',
      userName: 'Lina',
      userAv: faker.internet.avatar(),
      text: 'Tasty!!!',
      tag: 'Center Cut Filet',
    },
    {
      pid: 3,
      imgUrl: 'https://s3-media4.fl.yelpcdn.com/bphoto/fprtDpIJDMbI-Ede3s5G3Q/o.jpg',
      userName: 'Gloria',
      userAv: faker.internet.avatar(),
      text: 'Snickers cake!!!Huge!',
      tag: 'Snickers cake',
    },
  ];
  photos = photos.concat(samplePhoto);
  console.log(photos);
  for (let pid = 4; pid <= 100; pid += 1) {
    const imgUrl = faker.image.food();
    const userName = faker.internet.userName();
    const userAv = faker.image.avatar();
    const text = faker.lorem.sentence();
    const tag = faker.commerce.productName();
    // const bid = faker.random.number({ min: 1, max: 100 });

    photos.push({
      pid,
      imgUrl,
      userName,
      userAv,
      text,
      tag,
      // bid, don't use it for sample data
    });
  }
  // return { photos };
  return photos;
};

const dataArr = generateBiz();
const photoArr = generatePhoto();

// fs.writeFileSync('bizData.json', JSON.stringify(dataObj, null, '\t'));
// fs.writeFileSync('photoData.json', JSON.stringify(photoObj, null, '\t'));
// need modify to async await or try catch
const insertBizData = () => {
  Biz.create(dataArr)
    .then(() => console.log('done!'));
};
const insertPhoto = () => {
  photo.create(photoArr)
    .then(() => db.close());
};

insertBizData();
insertPhoto();
