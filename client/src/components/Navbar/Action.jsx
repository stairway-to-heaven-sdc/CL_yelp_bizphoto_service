import React from 'react';
import Icon from '../Icon/Icon';

const Action = ({ topic }) => (
  <div className="header-nav_unit--right grid_unit">
    <div className="header-link">
      <a className="header-link_anchor" href="https://www.yelp.com">
        <div className="header-link_wrapper u-padding-r2 u-padding-l2 ">
          <span className="nav--display--inline">
            <span
              style={{ width: '24px', height: '24px' }}
              className="icon--nav header-link_icon"
            >
              <Icon name={topic[1]} />
            </span>
          </span>
          <span className="header-link_text">
            {topic[0]}
          </span>
        </div>
      </a>
    </div>
  </div>
);

export default Action;
