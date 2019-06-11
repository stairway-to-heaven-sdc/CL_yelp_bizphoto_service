
import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const Dropdown = ({ listL, listR }) => (
  <div className="header-dropdown border-color--default u-padding-t2 u-padding-r2 u-padding-b2 u-padding-l2">
    <div className="grid grid--equal">
      <div className="header-dropdown-col grid_unit">
        <ul className="header-dropdown-ul">
          {listL.map(item => <Item item={item} key={item.id} />)
          }
        </ul>
      </div>
      <div className="header-dropdown-col grid_unit">
        <ul className="header-dropdown-ul">
          {listR.map(item => <Item item={item} key={item.id} />)
          }
        </ul>
      </div>
    </div>
  </div>
);
Dropdown.propTypes = {
  listL: PropTypes.array.isRequired,
  listR: PropTypes.array.isRequired,
};
export default Dropdown;
