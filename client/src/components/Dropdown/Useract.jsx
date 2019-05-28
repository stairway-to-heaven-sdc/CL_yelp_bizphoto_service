import React from 'react';
import Icon from '../Icon/Icon';

const Useract = () => (
  <div className="grid">
    <div className="grid_unit u-nowrap">
      <div className="header-main__account">
        <span className="m-btn m-btn--primary user-account__button">
          <span className="user-account__avatar">
            <img
              className="photo-box-img"
              alt="User"
              height="90"
              src="https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/bf5ff8a79310/assets/img/default_avatars/user_medium_square.png"
              width="90"
            />
          </span>
          <span style={{ width: '14px', height: '14px' }} className="icon icon--size-14 icon--inverse icon--fallback-inverted u-triangle-direction-down user-account__button-arrow">
            <Icon name="14x14_triangle_down" />
          </span>
        </span>
      </div>
    </div>
  </div>
);

export default Useract;
