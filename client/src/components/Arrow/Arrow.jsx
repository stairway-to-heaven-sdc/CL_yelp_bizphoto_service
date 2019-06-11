/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const Arrow = ({ name, classlabel, clickFunc }) => (
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
Arrow.propTypes = {
  name: PropTypes.string.isRequired,
  classlabel: PropTypes.string.isRequired,
  clickFunc: PropTypes.func.isRequired,
};
export default Arrow;
