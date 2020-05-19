import React from 'react';
import Calendar from './calendar.jsx';
import moment from 'moment';
import styled from 'styled-components';

const SliderContentBox = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  position: relative;
  transition-duration: 250ms;
`;


//NOTES:
// This a horizontal strip of the current and 12 upcoming months.
//think of this component as a strip of film.
// slider.jsx is the viewhole that covers all but 2 months at a time.

export default class SliderContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateObject: moment(),
    };
    this.renderEachMonth = this.renderEachMonth.bind(this);
    this.clickHandler = this.clickHandler.bind(this);

  }

  renderEachMonth = () => { //fill helper function to fill (returns 5 for may)
    var monthArray = [];
    for (var i = 0; i < 12; i++) {
      var today = moment(this.state.dateObject);
      today = today.add(i, 'M'); //be careful setting an object to another object!!
      monthArray.push(today);
    }
    return monthArray;
  };

  clickHandler(e) {
    var classJumble = String(document.getElementsByClassName(e.target.className)[0].className);

    if (this.props.isDateOne) {
      this.props.displayDateOne(classJumble);
    }
    else {
      this.props.displayDateTwo(classJumble);
    }

    this.props.switchDate();

    //regex out the month, date, year
    // classJumble

    //transform invisible box to visible circle
    // clickedDate.style.borderRadius = "50%";

  }



  render() {
    // loop through numbers of month 5 (today) to next may (5)
    //   pass number into props for Calendar
    //   render calendar for that month
    // render that calendar inside sliderContent
    var shiftStyle = { //TODO: refactor somehwere else
      right: this.props.shift
    };

    const eachMonth = this.renderEachMonth().map(dateObject =>
      <Calendar dateObject = {dateObject} clickHandler = {this.clickHandler.bind(this)} dateOne = {this.props.dateOne} dateTwo = {this.props.dateTwo}/>) //renders all 12 calendars in strip

    return (
      <SliderContentBox className = "sliderContent" style = {shiftStyle}>
        {eachMonth}
      </SliderContentBox>
    );
  }
}

