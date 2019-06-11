import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ name }) => (
  <svg
    role="img"
    className="icon_svg"
  >
    <use xlinkHref={`sprite.svg#${name}`} />
  </svg>
);
Icon.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Icon;
