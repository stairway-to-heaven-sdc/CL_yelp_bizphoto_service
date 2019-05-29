import React from 'react';
import useFetch from '../lib/useFetch';

const MediaContext = React.createContext();

const url = `/biz_photos/${1}/${1}`; // /biz_photos/:bId/:pId
const MediaProvider = (props) => {
  const data = useFetch(url);
  let value;
  if (data.state) { // toDO: implement fallback
    value = data.state;
    // value = imgUrl;
  }

  return <MediaContext.Provider value={value} {...props} />;
};
const useMedia = () => {
  const context = React.useContext(MediaContext);
  if (context === undefined) {
    return [
      {
        imgUrl: 'https://s3-media4.fl.yelpcdn.com/bphoto/J3kWrFK9vE5oBgREBJ1YQg/ls.jpg',
        text: 'test123',
      },
      {
        imgUrl: 'https://s3-media3.fl.yelpcdn.com/bphoto/L38qQjyzPvt53aJ5sTj4sg/ls.jpg',
        text: 'test 123123123123',
      },
      {
        imgUrl: 'https://s3-media1.fl.yelpcdn.com/bphoto/q2E4rONdikCPmCDCoJP-gw/ls.jpg',
        text: 'test 12312312312ddddd3 wihfa;lsjf weirhoishfl scccccccccgggggdf',
      },
    ];
  }
  return context;
};

export { MediaProvider, useMedia };
