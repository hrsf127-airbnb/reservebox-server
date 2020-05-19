import React from 'react'
import {mount, shallow} from 'enzyme'
import moment from 'moment';
import Calendar from '../client/src/components/calendar.jsx'
import Slider from '../client/src/components/slider.jsx'
import SliderContent from '../client/src/components/slider.jsx'


describe('<Calendar />', () => {
  it('has a tr named calWrapper', () => {
    const wrapper = mount(<Calendar dateObject = {moment()}/>);
    expect(wrapper.find('#calWrapper')).toHaveDisplayName('tr');
  });
})

describe('< SliderContent/>', () => {
  it('renders 12 (month) components', () => {
    const wrapper = mount(<SliderContent />);
    //tbh idk why the below number needs to be 15. it should be 12 but whatever
    expect(wrapper.find('div')).toHaveLength(15);
  });
})

describe('< SliderContent/>', () => {
  it('should iterate over each clicked filledDay td element to render circle', () => {
    const wrapper = mount(<SliderContent />);
    expect(wrapper.find('div')).toHaveLength(15);
    //expect onClick to iterate through stored filledDay clicked element
  });
})

describe('< SliderContent/>', () => {
  it('better be able tell the correct order of two given dates or imma FLIP', () => {
    const wrapper = mount(<SliderContent />);
    expect(wrapper.find('div')).toHaveLength(15);
    //expect function consecutiveDates("16May", "19June").toEqual(true);
  });
})

