import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ reviewCount, rating }) => (
  <div className="biz-rating-wrap  clearfix">
    <div className={`m-stars m-stars--${rating * 10}`} title={`${rating} star rating`} />
    <span className="review-count">{` ${reviewCount} reviews`}</span>
  </div>
);
Rating.propTypes = {
  reviewCount: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};
export default Rating;
