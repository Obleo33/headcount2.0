import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount, render } from 'enzyme';


it('renders without crashing', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.is('.app')).toEqual(true);
});
