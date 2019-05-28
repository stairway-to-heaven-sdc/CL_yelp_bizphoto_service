import React from 'react';
import Icon from '../Icon/Icon';
// toDo implement a modal for a href
const Detail = () => (
  <div className="rating-details">
    <a className="chiclet-link chiclet-link--with-text show-tooltip" href="https://www.yelp.com">
      <span style={{ width: '14px', height: '14px' }} className="icon icon--size-14 icon--currentColor">
        <Icon name="14x14_histogram" />
      </span>
      Detail
      <span className="tooltip-wrapper">
        <span className="tooltip">
         Rating details
        </span>
      </span>
    </a>
  </div>

);

export default Detail;
