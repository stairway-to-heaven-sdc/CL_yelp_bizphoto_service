import React from 'react';
import Icon from '../Icon/Icon';

const Navleft = ({ name, classlabel, clickFunc }) => (
  <div className={classlabel} onClick={clickFunc} role="button">
    <div className="arrow">
      <span
        style={{ width: '48px', height: '48px' }}
        className="icon icon--size-48 icon--inverse icon--fallback-inverted"
      >
        <Icon name={name} />
      </span>
    </div>
  </div>
);

export default Navleft;
