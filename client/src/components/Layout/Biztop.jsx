import React from 'react';
import Bizleft from './Bizleft';
import Bizright from './Bizright';

const Biztop = () => (
  <div className="biz-header clearfix">
    <Bizleft />
    <Bizright />
  </div>
);

export default Biztop;
