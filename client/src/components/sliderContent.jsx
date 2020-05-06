import React from 'react';
import Calendar from './calendar.jsx';
import moment from 'moment';


export default class SliderContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateObject: moment()
    };
    this.renderEachMonth = this.renderEachMonth.bind(this);

  }

  renderEachMonth = () => { //fill helper function to fill (returns 5 for may)
    var monthArray = [];
    for (var i = 0; i < 12; i++) {
      var today = moment(this.state.dateObject);
      today = today.add(i, 'M'); //be careful setting an object to another object!!
      monthArray.push(today);
    }
    console.log(monthArray);
    return monthArray;
  };

  render() {
    // loop through numbers of month 5 (today) to next may (5)
    //   pass number into props for Calendar
    //   render calendar for that month
    // render that calendar inside sliderContent
    const eachMonth = this.renderEachMonth().map(dateObject =>
      <Calendar dateObject = {dateObject}/>)
    return (
      <div className = "sliderContent">
        {eachMonth}
      </div>
    );
  }
}

