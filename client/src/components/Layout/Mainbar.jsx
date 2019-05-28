
import React from 'react';
import Yelp from '../Button/Yelp';
import Searchbar from '../Searchbar/Searchbar';
import Toplink from '../Toplink/Toplink';
import Useract from '../Dropdown/Useract';

const Mainbar = () => (
  <div className="l-content">
    <div className="grid grid--18 grid--middle">
      <Yelp />
      <Searchbar />
      <div className="grid_unit">
        <div className="header-main__notify u-nowrap">
          <Toplink name="24x24_speech" />
          <Toplink name="24x24_notification" />
        </div>
      </div>
      <div className="grid_unit">
        <Useract />
      </div>
    </div>
  </div>

);

export default Mainbar;
