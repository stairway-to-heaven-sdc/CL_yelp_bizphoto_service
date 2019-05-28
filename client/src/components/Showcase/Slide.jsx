import React from 'react';
// import PropTypes from 'prop-types';
import Photo from './Photo';

// TODO: determine if it is video or photo
// delete comments
const Slide = ({ pics, index }) => {
  console.log(pics);
  const { imgUrl, text } = pics[index];
  // return pics.map((pic, i) => {
  //   console.log(pic, i);
  //   const { imgUrl } = pic;
  // const img258 = 'https://s3-media4.fl.yelpcdn.com/bphoto/J3kWrFK9vE5oBgREBJ1YQg/ls.jpg';
  // const img348 = 'https://s3-media4.fl.yelpcdn.com/bphoto/J3kWrFK9vE5oBgREBJ1YQg/ls.jpg';
  // const img300 = 'https://s3-media4.fl.yelpcdn.com/bphoto/J3kWrFK9vE5oBgREBJ1YQg/ls.jpg';
  // const img258 = imgUrl;
  // const img348 = imgUrl;
  // const img300 = imgUrl;
  //   return <Photo imgUrl={imgUrl} img258={img258} img348={img348} img300={img300} keys={i} />;
  // });
  return <Photo imgUrl={imgUrl} text={text} />;
};
// Slide.propTypes = {
//   index: PropTypes.number.isRequired,
//   pics: PropTypes.arrayOf(PropTypes.object).isRequired,
// };
export default Slide;
