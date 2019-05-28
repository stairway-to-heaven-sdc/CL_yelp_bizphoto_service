import React from 'react';
import Icon from '../Icon/Icon';

const Navleft = ({ name, classlabel, clickFunc }) => (
  <div className={classlabel} onClick={clickFunc} role="button">
    <div className="arrow">
      <span
        style={{ width: '48px', height: '48px' }}
        className="icon icon--inverse"
      >
        <Icon name={name} />
      </span>
    </div>
  </div>
);

export default Navleft;