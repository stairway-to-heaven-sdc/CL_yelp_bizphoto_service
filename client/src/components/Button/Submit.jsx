import React from 'react';
import Icon from '../Icon/Icon';

const Submit = () => (
  <>
    <button
      type="button"
      className="m-btn m-btn--primary main-search_submit header-main__button"
      id="header-search-submit"
      title="Search"
    >
      <span className="main-search_action-icon-wrap">
        <span style={{ width: '24px', height: '24px' }} className="icon icon--inverse">
          <Icon name="24x24_search" />
        </span>
      </span>
    </button>
  </>
);
export default Submit;
