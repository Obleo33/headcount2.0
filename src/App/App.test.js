import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount, render } from 'enzyme';


describe('App component', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.is('.app')).toEqual(true);
  });

  it('should have a component called HeadCount', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('HeadCount').length).toEqual(1);
  });

});
