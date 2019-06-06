import React from 'react';
import { useBiz } from '../../context/biz-context';
import Claim from '../Tooltip/Claim';
import Rating from '../Rating/Rating';
import Detail from '../Tooltip/Detail';
import Category from '../Category/Category';

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
