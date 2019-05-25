
import React from 'react';
import Warbtn from '../Button/Warbtn';
import Addphoto from '../Button/Addphto';
import Share from '../Button/Share';
import Bookmark from '../Button/Bookmark';

const Bizright = () => (
  <div className="biz-header--right u-relative">
    <div className="biz-actions">
      <Warbtn />
      <span className="m-btn-group clearfix u-flex">
        <Addphoto />
        <Share />
        <Bookmark />
      </span>
    </div>
  </div>
);

export default Bizright;
