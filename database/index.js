const mongoose = require('mongoose');

const url = 'mongodb://localhost';
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
  uid: Number,
  text: String,
  tag: String,
});
const Photo = mongoose.model('Photo', photoSchema);

const userSchema = mongoose.Schema({
  uid: Number,
  userav: String,
  username: String,
});
const User = mongoose.model('User', userSchema);
module.exports = {
  Biz,
  Photo,
  User,
  db,
};
