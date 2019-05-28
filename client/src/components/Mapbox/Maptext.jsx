import React from 'react';
import Icon from '../Icon/Icon';
// left margin
// list component -> if doing modal
const Maptext = ({
  add1, add2, city, state, zip, phone, url, area,
}) => (
  <div className="mapbox-text">
    <ul>
      <li className="u-relative">
        <span
          style={{ width: '18px', height: '18px' }}
          className="icon icon--size-18 u-absolute u-sticky-top"
        >
          <Icon name="18x18_marker" />
        </span>
        <a
          className="link-more icon-wrapper mapbox-edit"
          href="https://www.yelp.com/biz_attribute?biz_id=TYgQmuqNUViLxORmy-snjg"
        >
          <span
            style={{ width: '14px', height: '14px' }}
            className="icon icon--size-14 icon--linked u-space-r-half"
          >
            <Icon name="14x14_pencil" />
          </span>
          <span>Edit</span>
        </a>
        <div className="map-box-address u-space-l4">
          <span className="street-address">
            {add1}
            <br />
            {add2}
            <br />
            {`${city}, ${state} ${zip}`}
            <br />
            <span style={{ fontWeight: 'normal' }}>
              {area}
            </span>
          </span>
        </div>
      </li>
      <li>
        {/* <li className="clearfix"> */}
        <div>
          <span
            style={{ width: '18px', height: '18px' }}
            className="icon icon--size-18"
          >
            <Icon name="18x18_directions" />
          </span>
          <a
            className="biz-directions u-space-l2"
            href="https://www.yelp.com/map/taste-of-texas-houston"
          >
            Get Directions
          </a>
        </div>
      </li>
      <li>
        <span
          style={{ width: '18px', height: '18px' }}
          className="icon icon--size-18"
        >
          <Icon name="18x18_phone" />
        </span>
        <span className="biz-phone u-space-l2">{phone}</span>
      </li>
      <li>
        <span
          style={{ width: '18px', height: '18px' }}
          className="icon icon--size-18"
        >
          <Icon name="18x18_external_link" />
        </span>
        <span className="biz-website u-space-l2">
          <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
        </span>
      </li>
      <li>
        {/* <li className="u-relative"> */}
        <span
          style={{ width: '18px', height: '18px' }}
          className="icon icon--size-18"
        >
          <Icon name="18x18_speech" />
        </span>
        <span className="message-to-biz u-space-l2">Message the business</span>
      </li>
      <li>
        {/* <li className="clearfix"> */}
        <div>
          <span
            style={{ width: '18px', height: '18px' }}
            className="icon icon--size-18"
          >
            <Icon name="18x18_mobile" />
          </span>
          <span className="biz-to-phone u-space-l2">Send to your Phone</span>
        </div>
      </li>
    </ul>

  </div>
);

export default Maptext;
