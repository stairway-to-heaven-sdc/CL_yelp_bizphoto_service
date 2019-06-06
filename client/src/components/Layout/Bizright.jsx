
import React from 'react';
import Warbtn from '../Button/Warbtn';
import ActBtn from '../Button/ActBtn';

const Bizright = () => (
  <div className="biz-header--right u-relative">
    <div className="biz-actions">
      <Warbtn />
      <span className="m-btn-group clearfix u-flex">
        <ActBtn
          style={{ width: '18px', height: '18px' }}
          className="icon icon--currentColor"
          name="18x18_add_photo"
          text="Add photo"
        />
        <ActBtn
          style={{ width: '18px', height: '18px' }}
          className="icon icon--currentColor"
          name="18x18_share"
          text="Share"
        />
        <ActBtn
          style={{ width: '14px', height: '14px' }}
          className="icon icon--size-14 icon--currentColor"
          name="14x14_save"
          text="Save"
        />
      </span>
    </div>
  </div>
);

export default Bizright;
