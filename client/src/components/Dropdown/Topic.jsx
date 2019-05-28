import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import Icon from '../Icon/Icon';
// toDO: add class if open (header-link--dropdown-open)
const Topic = ({ topic, listL, listR }) => {
  const [showMenu, setShow] = useState(false);
  const show = () => {
    // console.log('on');
    setShow(!showMenu);
  };
  const hide = () => {
    // console.log('out');
    setShow(false);
  };
  return (
    <div className="header-nav_unit--left grid_unit">
      <div className="header-link header-link--dropdown-open">
        <span className="header-link_anchor" onMouseOver={show} onMouseOut={hide} onFocus={() => {}} onBlur={() => {}}>
          <div className="header-link_wrapper u-padding-r2 u-padding-l2">
            { topic[1]
              ? (
                <span className="nav--display--inline">
                  <span style={{ width: '24px', height: '24px' }} className="icon--nav header-link_icon">
                    <Icon name={topic[1]} />
                  </span>
                </span>
              ) : (null)
            }
            <span className="header-link_text">
              {topic[0]}
            </span>
            <span className="nav--display--inline u-padding-l1">
              <span style={{ width: '24px', height: '24px' }} className="icon--nav header-link_icon">
                <Icon name="24x24_chevron_down" />
              </span>
            </span>
          </div>
        </span>
        {showMenu ? <Dropdown listL={listL} listR={listR} /> : (null)}
      </div>
    </div>
  );
};

export default Topic;
