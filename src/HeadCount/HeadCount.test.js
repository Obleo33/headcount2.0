import React from 'react';
import ReactDOM from 'react-dom';
import HeadCount from './HeadCount';
import { shallow, mount, render } from 'enzyme';
import DistrictRepository from '../helper';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('HeadCount testing', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<HeadCount />);
    expect(wrapper.is('.head-count')).toEqual(true);
  });

  it('has a state of data', () => {
    const wrapper = shallow(<HeadCount />);
    expect(typeof wrapper.state().data).toBe('object');
  });

});
