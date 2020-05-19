import React from 'react';
import GuestClicker from './guestClicker.jsx';
import styled from 'styled-components';

const Dropdown = styled.div`
  width: 315px;
  z-index: 100;
  position: absolute;
  margin-top: 162px;
  background-color: white;

`;

const GuestNumberWrapper = styled.div`
  border: solid .5px #b0b0b0;
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  align-items: center;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  color: black;
  font-weight: 50;

`;

const GuestNumber = styled.div`

`;



export default class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <Dropdown>
        <GuestNumberWrapper>
          Adults
          <GuestNumber>
            <GuestClicker adults = {this.props.adults} setAdults = {e => this.props.setAdults(e)}/>
          </GuestNumber>
        </GuestNumberWrapper>
      </Dropdown>
    );
  }
}
