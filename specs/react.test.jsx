import React from 'react'
import {mount, shallow} from 'enzyme'
import Calendar from '../client/src/components/calendar.jsx'
import moment from 'moment';
import SliderContent from '../client/src/components/sliderContent.jsx'

describe('<Calendar />', () => {
  it('assert checked', () => {
    const wrapper = mount(<Calendar dateObject = {moment()}/>);
    expect(wrapper.find('#calWrapper')).toHaveDisplayName('tr');
  });
})

