import React from 'react';
import Icon from '../Icon/Icon';
// reuse button but it's not modal
const Toplink = ({ name }) => (
  <span className="header-main__link">
    <span style={{ width: '24px', height: '24px' }} className="icon icon--white">
      <Icon name={name} />
    </span>
  </span>
);

export default Toplink;
