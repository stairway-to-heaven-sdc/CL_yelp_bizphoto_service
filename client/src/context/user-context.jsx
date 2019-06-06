import React from 'react';
import useFetch from '../lib/useFetch';
//TODO: need small size photo...

const UserContext = React.createContext();

let url = `/biz_photos/${1}/${1}`; // /biz_photos/:bId/:pId
if (window.location.pathname !== '/') {
  url = `/biz_photos/${window.location.pathname.slice(6)}${1}`;
  console.log(url);
}

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
  const context = React.useContext(MediaContext);
  console.log('user context is ', context);
  if (context === undefined) {
    return [
      {
        username: `hibow`,
        photo: null
      },
      {
        username: `Nick`,
        photo: `http://pbs.twimg.com/profile_images/952318165941477376/e-3MyGW3.jpg`
      },
      {
        username: `John`,
        photo:null
      },
    ];
  }
  return context;
};

export { MediaProvider, useMedia };
