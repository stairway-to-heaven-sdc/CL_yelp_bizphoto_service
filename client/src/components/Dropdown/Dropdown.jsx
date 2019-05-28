
import React from 'react';
import Item from './Item';

const Dropdown = ({ listL, listR }) => (
  <div className="header-dropdown border-color--default u-padding-t2 u-padding-r2 u-padding-b2 u-padding-l2">
    <div className="grid grid--equal">
      <div className="header-dropdown-col grid_unit">
        <ul className="header-dropdown-ul">
          {listL.map((item, i) => <Item item={item} keys={i} />)
          }
        </ul>
      </div>
      <div className="header-dropdown-col grid_unit">
        <ul className="header-dropdown-ul">
          {listR.map((item, i) => <Item item={item} keys={i} />)
          }
        </ul>
      </div>
    </div>
  </div>
);

export default Dropdown;
