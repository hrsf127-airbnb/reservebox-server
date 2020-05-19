import React from 'react';
import styled from 'styled-components';

const CalendarDummyBox = styled.div`
  width: 650px;
  height: 460px;
  border-radius: 10%;
  border: solid 1px red;
`;


export default class CalendarDummy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }


  render() {
    return (
      <CalendarDummyBox />
    );
  }
}

