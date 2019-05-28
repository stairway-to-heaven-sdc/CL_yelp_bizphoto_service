import React from 'react';
import Submit from '../Button/Submit';
// import Inputleft from './Inputleft';
// import Inputright from './Inputright';
// TODO: combine two search inputs
// Todo: alignment for search bar
// todo: useraccount drop down
const Searchbar = () => (
  <div className="main-search-wrap grid_unit grid_unit--fill align-middle">
    <form className="main-search yform u-space-b20">
      <div className="grid">
        <div className="grid_unit grid_unit--fill">
          <div className="grid grid--equal">
            this is input one
            this is input two
            {/* <Inputleft />
            <Inputright /> */}
          </div>
        </div>
        <div className="grid_unit main-search_action">
          <Submit />
        </div>
      </div>
    </form>
  </div>

);

export default Searchbar;
