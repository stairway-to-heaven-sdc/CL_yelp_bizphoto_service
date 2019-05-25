import React from 'react';
import { useBiz } from '../../context/biz-context';
import Claim from '../tooltip/Claim';
import Rating from '../rating/Rating';
import Detail from '../tooltip/Detail';
import Category from '../category/Category';
// render biz info
const Bizleft = () => {
  const {
    bizname, reviewCount, rating, price, category,
  } = useBiz();
  return (
    <div className="biz-header--left">
      <div className="u-space-t1">
        <div>
          <h1 className="biz-title embossed-text-white">{bizname}</h1>
          <Claim />
        </div>
      </div>
      <div className="biz-info">
        <div className="biz-rating clearfix">
          <Rating reviewCount={reviewCount} rating={rating} />
          <Detail />
        </div>
        <Category price={price} category={category} />
      </div>
    </div>

  );
};

export default Bizleft;
