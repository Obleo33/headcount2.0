import React from 'react';
import DistrictCards from './DistrictCards';
import { shallow } from 'enzyme';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../helper';


describe('DistrictCards testing', () => {
  const districtData = new DistrictRepository(kinderData).findAllMatches()
  const Data = districtData

  it('renders without crashing', () => {
    const wrapper = shallow(<DistrictCards data={Data}/>);
    expect(wrapper.find('.district-container').length).toEqual(1);
  });

  it('should have a component called CompareDistricts', () => {
    const wrapper = shallow(<DistrictCards data={Data}/>);
    expect(wrapper.find('CardCreator').length).toEqual(181);
  });
});
