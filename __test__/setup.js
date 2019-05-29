/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from 'react';
// import '@babel/polyfill';
import Enzyme, {
  mount, render, shallow, configure,
} from 'enzyme';
import fetch from 'node-fetch';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.fetch = fetch;
