import React from 'react';
import Icon from '../Icon/Icon';

const Item = ({ item }) => (
  <li className="header-dropdown-li">
    <a className="header-dropdown-link_anchor" href="https://www.yelp.com">
      <div className="header-dropdown-link_wrapper u-padding-t2 u-padding-r2 u-padding-b2 u-padding-l2">
        <span className="nav--display--inline u-padding-r1">
          <span
            className="icon--nav header-dropdown-link_icon"
            style={{ width: '24px', height: '24px' }}
          >
            <Icon name={item[1]} />
          </span>
        </span>
        <span className="header-dropdown-link_text">
          {' '}
          {item[0]}
        </span>
      </div>
    </a>
  </li>
);

export default Item;
