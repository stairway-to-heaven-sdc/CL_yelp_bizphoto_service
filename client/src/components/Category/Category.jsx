import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ price, category }) => (
  <div className="price-category">
    <span className="bullet">
      <span className="price-range">{price}</span>
    </span>
    <span className="category-list">
      {` ${category.join(', ')} `}
    </span>
    <a
      href="https://www.yelp.com"
      className="chiclet-link chiclet-link-text"
    >
      Edit
    </a>
  </div>
);

Category.propTypes = {
  price: PropTypes.string.isRequired,
  category: PropTypes.array.isRequired,
};
export default Category;
