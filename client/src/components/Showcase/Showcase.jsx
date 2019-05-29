import React, { useState } from 'react';
import Slide from './Slide';
import Arrow from '../Arrow/Arrow';
import Seemore from './Seemore';
import Watchvid from './Watchvid';
import { useMedia } from '../../context/media-context';
import useIndex from '../../lib/useIndex';

const Showcase = () => {
  const media = useMedia();
  console.log('logging here?', process.env.NODE_ENV);
  const len = media.length;
  const { index, handleleft, handleright } = useIndex(0, len);
  const slideOne = [];
  slideOne.push(media[len - 1]);
  media.forEach((item, i) => {
    if ((i !== len - 1) && (i !== len - 2)) slideOne.push(item);
  });
  const slideTwo = media.slice(0, len - 1);
  const slideThree = media.slice(1);
  return (
    <div className="showcase">
      <div className="biz__grey" />
      <div className="showcase-footer">
        <Watchvid />
        <Seemore count={len} />
      </div>
      <div className="showcase-slider">
        <div className="showcase-photos">
          <div className="photo photo-1">
            <Slide pics={slideOne} index={index} />
          </div>
          <div className="photo photo-2">
            <Slide pics={slideTwo} index={index} />
          </div>
          <div className="photo photo-3">
            <Slide pics={slideThree} index={index} />
          </div>
        </div>
        <Arrow name="48x48_chevron_left" classlabel="nav nav-left" clickFunc={handleleft} />
        <Arrow name="48x48_chevron_right" classlabel="nav nav-right" clickFunc={handleright} />
      </div>
    </div>
  );
};

export default Showcase;
