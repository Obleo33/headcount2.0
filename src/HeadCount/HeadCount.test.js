import React from 'react';
import ReactDOM from 'react-dom';
import HeadCount from './HeadCount';
import { shallow, mount, render } from 'enzyme';


describe('HeadCount testing', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<HeadCount />);
    expect(wrapper.is('.head-count')).toEqual(true);
  });

  it('has a state of data', () => {
    const wrapper = shallow(<HeadCount />);
    expect(typeof wrapper.state()).toBe('object');
  });

  it('should have a component called DistrictCards', () => {
    const wrapper = shallow(<HeadCount/>);
    expect(wrapper.find('DistrictCards').length).toEqual(1);
  });

});
