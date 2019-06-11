import React from 'react';
import Topic from '../Dropdown/Topic';
import Action from './Action';

const Navbar = () => (
  <div className="grid ">
    <Topic
      topic={['Restaurants', '24x24_eat']}
      listL={[
        ['Delivery', '24x24_delivery'],
        ['Burgers', '24x24_burgers'],
        ['Chinese', '24x24_chinese'],
        ['Italian', '24x24_italian'],
      ]}
      listR={[
        ['Reservations', '24x24_reservation'],
        ['Japanese', '24x24_japanese'],
        ['Mexican', '24x24_mexican'],
        ['Thai', '24x24_thai'],
      ]}
    />
    <Topic
      topic={['Home Services', '24x24_home_services']}
      listL={[
        ['Contractors', '24x24_contractor'],
        ['Electricians', '24x24_electrician'],
        ['Home Cleaners', '24x24_home_cleaners'],
        ['HVAC', '24x24_hvac'],
      ]}
      listR={[
        ['Landscaping', '24x24_landscaping'],
        ['Locksmiths', '24x24_locksmith'],
        ['Movers', '24x24_movers'],
        ['Plumbers', '24x24_plumbers'],
      ]}
    />
    <Topic
      topic={['Auto Services', '24x24_auto_services']}
      listL={[
        ['Auto Repair', '24x24_auto_repair'],
        ['Auto Detailing', '24x24_auto_detailing'],
        ['Body Shops', '24x24_body_shop'],
        ['Car Wash', '24x24_car_wash'],
      ]}
      listR={[
        ['Car Dealers', '24x24_car_dealer'],
        ['Oil Change', '24x24_oil_change'],
        ['Parking', '24x24_parking'],
        ['Towling', '24x24_towing'],
      ]}
    />
    <Topic
      topic={['More', null]}
      listL={[
        ['Dry Cleaning', '24x24_dry_cleaning'],
        ['Phone Repair', '24x24_phone_repair'],
        ['Bars', '24x24_bars'],
        ['Nightlife', '24x24_nightlife'],
      ]}
      listR={[
        ['Hair Salons', '24x24_salon'],
        ['Gyms', '24x24_gyms'],
        ['Massage', '24x24_massage'],
        ['Shopping', '24x24_shopping'],
      ]}
    />
    <div className="header-nav_fill grid_unit grid_unit--fill" />
    <Action topic={['Write a Review', '24x24_pencil']} />
    <Action topic={['For Business', '24x24_bizhouse']} />
  </div>

);

export default Navbar;
