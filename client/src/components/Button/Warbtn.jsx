import React from 'react';
import Icon from '../Icon/Icon';
// reuse button
const Warbtn = () => (
  <a
    className="m-btn m-btn-primary war-button"
    href="https://www.yelp.com/writeareview/biz/TYgQmuqNUViLxORmy-snjg?return_url=%2Fbiz%2FTYgQmuqNUViLxORmy-snjg&source=biz_details_war_button"
  >
    <span
      style={{ width: '24px', height: '24px' }}
      className="icon icon--size-24 icon--currentColor u-space-r-half"
    >
      <Icon name="24x24_star" />
    </span>
    Write a Review
  </a>
);

export default Warbtn;
