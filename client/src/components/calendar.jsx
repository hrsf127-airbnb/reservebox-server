import React from 'react';
import moment from 'moment';
var weekday = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];


export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateObject: props.dateObject
    };
  }

firstDayOfMonth = () => { //returns 5 in May for some reason, but still accurately renders in blankFiller
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
                 .startOf("month")
                 .format("d");
   return firstDay;
};

blankFiller = () => {
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <td className="calendar-day empty">{""}</td>
      );
    }
    return blanks;
  }

dateFiller = () => {
    let dateObject = this.state.dateObject;
    let daysInMonth = [];
    for (let d = 1; d <= dateObject.daysInMonth(); d++) {
      daysInMonth.push(
        <td key={d} className="calendar-day">
          {d}
        </td>
      );
    }
    return daysInMonth;
  };




  render() {
    const listItems = weekday.map((day) =>
      <th id = 'weekdayshort'>{day}</th>
    )

    const blankDays = this.blankFiller().map((blankDay) =>
      <td id = 'blankDay'>{blankDay}</td>
    )

    const filledDays = this.dateFiller().map((filledDay) =>
      <td id = 'filledDay'>{filledDay}</td>
    )

    return (
      <tbody className = 'calendar'>
        <div id = 'monthName'> {moment(this.state.dateObject).format('MMMM')} </div>
        {listItems}
          <tr id = 'calWrapper' >
            {blankDays}
            {filledDays}
          </tr>
      </tbody>
    );
  }
}