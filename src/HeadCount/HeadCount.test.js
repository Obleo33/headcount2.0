import React from 'react';
import ReactDOM from 'react-dom';
import HeadCount from './HeadCount';
import { shallow, mount, render } from 'enzyme';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../helper';



describe('HeadCount testing', () => {

  it('renders a className of .head-count', () => {
    const wrapper = shallow(<HeadCount />);
    expect(wrapper.is('.head-count')).toEqual(true);
  });

  it('has a state of data defaulted to an empty object', () => {
    const wrapper = shallow(<HeadCount />);
    expect(typeof wrapper.state().data).toBe('object');
  });

  it('has a state of search defaulted to an empty array', () => {
    const wrapper = shallow(<HeadCount />);
    expect(wrapper.state().search).toEqual([]);
  });

  it('has a state of compare defaulted to an empty array', () => {
    const wrapper = shallow(<HeadCount />);
    expect(wrapper.state().compare).toEqual([]);
  });

  it('should have a component called DistrictCards', () => {
    const wrapper = shallow(<HeadCount/>);
    expect(wrapper.find('DistrictCards').length).toEqual(1);
  });

  it('should have a component called CompareDistricts', () => {
    const wrapper = shallow(<HeadCount/>);

    expect(wrapper.find('CompareDistricts').length).toEqual(1);
  });

  it('should have a search input', () => {
    const wrapper = shallow(<HeadCount/>);

    expect(wrapper.find('input').length).toEqual(1);
  });

  it('Search changes search in state onChange and populate 181 cards when search is an empty string', () => {
    const wrapper = shallow(<HeadCount/>);
    const search = wrapper.find('.search-input')

    search.simulate('change', { target: { value: 'Col' } });

    expect(wrapper.state().search.length).toEqual(2);

    search.simulate('change', { target: { value: '' } });
    expect(wrapper.state().search.length).toEqual(181);
  });

  it('fires handleClick on click of a div className .district-card', () => {
    const mockedClick = jest.fn();
    const wrapper = mount(<HeadCount/>)

    const cardArray = wrapper.find('.district-card');
    console.log(cardArray);

    cardArray[0].simulate('click');
    expect(wrapper.state().compare.length).toEqual(1)

    cardArray[1].simulate('click');
    expect(wrapper.state().compare.length).toEqual(2)

    cardArray[2].simulate('click');
    expect(wrapper.state().compare.length).toEqual(2)

    cardArray[2].simulate('click');
    expect(wrapper.state().compare.length).toEqual(1)

    cardArray[0].simulate('click');
    expect(wrapper.state().compare.length).toEqual(0)


   });

});
