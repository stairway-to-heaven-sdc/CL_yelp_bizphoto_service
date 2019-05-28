
import React from 'react';
import Mapbox from '../Mapbox/Mapbox';
import Showcase from '../Showcase/Showcase';

const Bizmain = () => (
  <div className="biz-main">
    <div className="mapbox-wrapper">
      <Mapbox />
    </div>
    <div className="showcase-wrapper">
      <Showcase />
    </div>
  </div>
);

export default Bizmain;
