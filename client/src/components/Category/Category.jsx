import React from 'react';

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

export default Category;