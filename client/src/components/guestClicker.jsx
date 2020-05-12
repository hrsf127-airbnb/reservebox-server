import React from 'react';
import styled from 'styled-components';

const GuestClickerWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const AddSubtractButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid .5px black;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  font-size: 15px;
  margin: 5px 10px 5px 10px;
`;

const GuestNumber = styled.div`
  font-size: 15px;
  margin: 0 10px 0 10px;
  font-family: 'Roboto', sans-serif;
  color: black;
  font-weight: 50;

`;

export default class GuestClicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateObject: '',
    };
  }



  clickHandler(e) {

  }



  render() {

    return (
      <GuestClickerWrapper>
        <AddSubtractButton id = 'negative' onClick = {(e) => this.props.setAdults(e)}> - </AddSubtractButton>
        <GuestNumber> {this.props.adults} </GuestNumber>
        <AddSubtractButton id = 'positive' onClick = {(e) => this.props.setAdults(e)} > + </AddSubtractButton>
      </GuestClickerWrapper>

    );
  }
}
