import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import styles from '../../dist/styles.css'
var weekday = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const CalendarBox = styled.tbody`
  border: solid 1px black;
  margin: 0 25px 0 25px;

`;

const CalWrapper = styled.tr`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  width: 210px;
  padding: 0px;
`;

const BlankDay = styled.td`
  box-sizing: border-box;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
`;

const FilledDay = styled.td`
  box-sizing: border-box;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  font-family: 'Roboto', sans-serif;
  color: black;
  font-size: 14px;
  line-height: 23px;
`;

const MonthName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  color: black;
  font-size: 14px;
  line-height: 23px;
  font-weight: 2000;
`;

const WeekdayShort = styled.th`
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  font-family: 'Roboto', sans-serif;
  color: black;
  font-size: 14px;
  line-height: 23px;
`;


export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateObject: props.dateObject,
    };
    this.dateFiller = this.dateFiller.bind(this);
    this.blankFiller = this.blankFiller.bind(this);
  }

componentDidMount() {
  var listOfDates = document.getElementsByTagName("TD"); //TODO ask jordan about this
  for (var td of listOfDates) {
    if (td.className === this.props.dateOne) {
      td.style.borderRadius = '50%';
      td.style.border = 'solid 1px black';
    }
    
    else if (td.className === this.props.dateTwo) {
      td.style.borderRadius = '50%';
      td.style.border = 'solid 1px black';
    }
    else {
      td.style.borderRadius = '';
      td.style.border = '';
    }
  }


  var hTMLarray = document.getElementsByClassName(this.props.dateOne);
  if (hTMLarray.length !== 0) {
    hTMLarray[0].style.borderRadius = '50%';

  }
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
        <BlankDay id = 'blankDay' onClick = {e => this.props.clickHandler(e)}>{""}</BlankDay>
      );
    }
    return blanks;
  }



dateFiller = () => {
    let dateObject = this.state.dateObject;
    let daysInMonth = [];
    for (let d = 1; d <= dateObject.daysInMonth(); d++) {
      daysInMonth.push(
        <FilledDay id = 'filledDay' key = {"day" && d} className = {"@" + (this.state.dateObject).format('MMMM') + "@" +
        (this.state.dateObject).format('YYYY') + "@" + String(d)}
        onClick = {e => this.props.clickHandler(e)} >
        {/* keys shouldn't be numbers. concat "day1" */}
          {d}
        </FilledDay>
      );
    }
    return daysInMonth;
  };





  render() {

    const listItems = weekday.map((day) =>
      <WeekdayShort id = 'weekdayshort'>{day}</WeekdayShort>
    )

    const blankDays = this.blankFiller().map((blankDay) =>
      blankDay
    )

    const filledDays = this.dateFiller().map((filledDay) =>
      filledDay
    )



    return (
      <CalendarBox className = 'calendar'>
        <MonthName id = 'monthName'>
          {moment(this.state.dateObject).format('MMMM') + " " + moment(this.state.dateObject).format('YYYY')}
        </MonthName>
        {listItems}
          <CalWrapper id = 'calWrapper' >
            {blankDays}
            {filledDays}
          </CalWrapper>
      </CalendarBox>
    );
  }
}