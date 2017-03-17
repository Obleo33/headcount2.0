import React from 'react';
import ReactDOM from 'react-dom';
import CardCreator from './CardCreator';
import { shallow, mount, render } from 'enzyme';

const Value = { location: 'Colorado',
          yearlyData:
           { '2004': 0.24,
             '2005': 0.278,
             '2006': 0.337,
             '2007': 0.395,
             '2008': 0.536,
             '2009': 0.598,
             '2010': 0.64,
             '2011': 0.672,
             '2012': 0.695,
             '2013': 0.703,
             '2014': 0.741
            }
}

describe('CardCreator testing', () => {

 it('renders without crashing', () => {
   const wrapper = shallow(<CardCreator value={Value} index={Date.now()} />);
   expect(wrapper.find('.district-card').length).toEqual(1);
 });

 it('renders without crashing', () => {
   const wrapper = shallow(<CardCreator value={Value} index={Date.now()} />);
   expect(wrapper.find('DistrictYears').length).toEqual(1);
 });

 it('fires handleClick on click of a div className .districtClass', () => {
   const mockedSubmit = jest.fn();
   const wrapper = mount(<CardCreator value={Value} index={Date.now()} handleClick={mockedSubmit} />)
  //  const expectedState = {
  //    title: '',
  //    body: ''
  //  };
   const divDistrictClass = wrapper.find('');
   console.log(divDistrictClass);
   divDistrictClass.simulate('click');
   expect(wrapper.state().compare.length).toBe(1)
  });

 });
