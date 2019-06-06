import React from 'react';

const Inputfield = ({
  name, phr, text, className,
}) => (
  <div className="grid_unit main-search_search-field-grid">
    <div className="search-field-container">
      <label className={className} htmlFor={name}>
        <span className="pseudo-input_text">{text}</span>
        <span className="pseudo-input_field-holder">
          <input
            className="main-search_field pseudo-input_field inputTwo"
            maxLength="64"
            id={name}
            autoComplete="off"
            placeholder={phr}
          />
        </span>
      </label>
    </div>
  </div>
);

export default Inputfield;
