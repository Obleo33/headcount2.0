import React from 'react';
import DistrictYears from './DistrictYears';
import { shallow } from 'enzyme';


describe('DistrictYears testing', () => {
  const Value = {'2004': 0.24,
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

  it('has a class of yearly-data', () => {
    const wrapper = shallow(<DistrictYears yearlyData={Value}/>);
    expect(wrapper.find('.yearly-data').length).toEqual(1);
  });

  it('renders all years', () => {
    const wrapper = shallow(<DistrictYears yearlyData={Value}/>);
    expect(wrapper.find('.year').length).toEqual(11);
  });

  it('renders high or low if data is over or under 0.5', () => {
    const wrapper = shallow(<DistrictYears yearlyData={Value}/>);
    expect(wrapper.find('.over').length).toEqual(7);
    expect(wrapper.find('.under').length).toEqual(4);
  });
});
