import React from 'react';
import ReactDOM from 'react-dom';
import DistrictCards from './DistrictCards';
import { shallow, mount, render } from 'enzyme';

describe('DistrictCards testing', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<DistrictCards />);
    expect(wrapper.is('.district-container')).toEqual(true);
  });

});
