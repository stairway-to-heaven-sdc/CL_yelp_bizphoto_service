import React from 'react';
import './Biztop.css';
import Bizleft from './Bizleft';
import Bizright from './Bizright';

const Biztop = () => (
  <div className="biz-page-header clearfix">
    <Bizleft />
    <Bizright />
  </div>
);

export default Biztop;
