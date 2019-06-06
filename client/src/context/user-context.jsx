import React from 'react';
import useFetch from '../lib/useFetch';
// TODO: need small size photo...

const UserContext = React.createContext();

// let url = `/biz_photos/${1}/${1}`; // /biz_photos/:bId/:pId
const url = '/users/?uIds[]=1';

const UserProvider = (props) => {
  const data = useFetch(url);
  let value;
  if (data.state) {
    // const userUrl = '/users/?uIds[]=1';
    // // eslint-disable-next-line react-hooks/rules-of-hooks
    // const userdata = useFetch(userUrl);
    // console.log(userdata.username);
    value = data.state;
    // value = imgUrl;
  }

  return <UserContext.Provider value={value} {...props} />;
};
const useUser = () => {
  const context = React.useContext(UserContext);
  console.log('user context is ', context);
  if (context === undefined) {
    return [
      {
        username: 'hibow',
        photo: 'https://s3-media4.fl.yelpcdn.com/photo/Va09KqWDtRiYbA0XWTU48g/30s.jpg',
      },
      {
        username: 'Nick',
        photo: 'https://s3-media4.fl.yelpcdn.com/photo/Va09KqWDtRiYbA0XWTU48g/30s.jpg',
      },
      {
        username: 'John',
        photo: 'https://s3-media4.fl.yelpcdn.com/photo/Va09KqWDtRiYbA0XWTU48g/30s.jpg',
      },
    ];
  }
  return context;
};

export { UserProvider, useUser };
