import React from 'react';
import CardCreator from './CardCreator';
import { shallow } from 'enzyme';

describe('CardCreator testing', () => {
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
};

  it('renders without crashing', () => {
    const wrapper = shallow(<CardCreator value={Value} index={Date.now()} />);
    expect(wrapper.find('.district-card').length).toEqual(1);
 });

  it('renders without crashing', () => {
    const wrapper = shallow(<CardCreator value={Value} index={Date.now()} />);
    expect(wrapper.find('DistrictYears').length).toEqual(1);
  });
});
