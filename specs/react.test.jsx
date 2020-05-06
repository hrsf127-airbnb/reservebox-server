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

describe('< />', () => {
  it('renders 12 (month) components', () => {
    const wrapper = mount(<SliderContent />);
    expect(wrapper.find('div')).toHaveLength(15);
  });
})

