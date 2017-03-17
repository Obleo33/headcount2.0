import React from 'react';
import ReactDOM from 'react-dom';
import CompareDistricts from './CompareDistricts';
import { shallow, mount, render } from 'enzyme';
import DistrictRepository from '../helper';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

const Compare = [{ location: 'Colorado',
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
             '2014': 0.741 } },
        { location: 'ACADEMY 20',
          yearlyData:
           { '2004': 0.302,
             '2005': 0.267,
             '2006': 0.354,
             '2007': 0.392,
             '2008': 0.385,
             '2009': 0.39,
             '2010': 0.436,
             '2011': 0.489,
             '2012': 0.479,
             '2013': 0.488,
             '2014': 0.49 } }];

const Data = new DistrictRepository(kinderData).findAllMatches()

describe('CompareDistricts testing', () => {

  it.skip('has a compare-district-container', () => {
    const wrapper = shallow(<CompareDistricts data={Data} compare={Compare}/>);
    expect(wrapper.find('.compare-district-container').length).toEqual(1);
  });

  it.skip('should have a component called CardCreator', () => {
    // console.log(Data.compareDistrictAverages());
    // undefined ^^^ 
    const wrapper = mount(<CompareDistricts data={Data} compare={Compare}/>);
    expect(wrapper.find('CardCreator').length).toEqual(2);
  });
});
