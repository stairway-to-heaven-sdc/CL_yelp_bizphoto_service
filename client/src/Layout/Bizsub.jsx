import React from 'react';
import './Bizsub.css';
import Mapbox from '../Mapbox/Mapbox';
import Showcase from '../Showcase/Showcase';

const Bizsub = () => (
  <div className="biz-page-subheader">
    <div className="mapbox-container">
      <Mapbox />
    </div>
    <div className="showcase-container">
      <Showcase />
    </div>
  </div>
);

export default Bizsub;
