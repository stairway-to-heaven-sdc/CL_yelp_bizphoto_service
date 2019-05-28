import React from 'react';

const Rating = ({ reviewCount, rating }) => (
  <div className="biz-rating-wrap  clearfix">
    <div className={`m-stars m-stars--${rating * 10}`} title={`${rating} star rating`} />
    <span className="review-count">{` ${reviewCount} reviews`}</span>
  </div>
);

export default Rating;
