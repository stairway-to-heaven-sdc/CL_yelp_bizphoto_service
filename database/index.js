const mongoose = require('mongoose');

const url = 'mongodb://localhost/test';
const mongoDBURI = process.env.MONGOLAB_URI || url;

mongoose.connect(mongoDBURI,
  {
    dbName: 'Yelp',
    useNewUrlParser: true,
  }).then(() => console.log('mongoDB connected'))
  .catch(err => console.log(err));

const db = mongoose.connection;

const bizSchema = mongoose.Schema({
  bid: Number,
  bizname: String,
  reviewCount: Number,
  rating: Number,
  price: String,
  category: [String],
  location: Object,
  phone: String,
  url: String,
  photos: [Number],
});

const Biz = mongoose.model('Biz', bizSchema);

const photoSchema = mongoose.Schema({
  pid: Number,
  imgUrl: String,
  userName: String,
  userAv: String,
  text: String,
  tag: String,
});
const photo = mongoose.model('photo', photoSchema);
module.exports = {
  Biz,
  photo,
  db,
};
