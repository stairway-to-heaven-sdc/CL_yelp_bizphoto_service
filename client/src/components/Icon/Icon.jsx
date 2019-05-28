import React from 'react';

const Icon = ({ name }) => (
  <svg
    role="img"
    className="icon_svg"
  >
    <use xlinkHref={`sprite.svg#${name}`} />
  </svg>
);

export default Icon;
