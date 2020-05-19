import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  height: 42px;

  display: flex;

  justify-content: center;

  align-items: center;

  background-image: radial-gradient(circle at center center, rgb(255, 56, 92) 0%, rgb(230, 30, 77) 27.5%, rgb(227, 28, 95) 40%, rgb(215, 4, 102) 57.5%, rgb(189, 30, 89) 75%, rgb(189, 30, 89) 100%);

  &:hover {background-position: calc(var(--mouseX) + 100px);
  }

  background-position: 140px;

  transition: background-position  1.25s ease 0s;

  transition-property: background-position;

  transition-duration: background-position  1.25s;

  transition-timing-function: background-position ease;

  transition-delay: background-position  0s;

  cursor: pointer;

  border-radius: 6px;

  width: 330px;

`;

const ButtonText = styled.span`
  font-family: 'Roboto', sans-serif;
  color: white;
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  cursor: pointer;
`;


class ReserveNowButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <Button id = 'reserveNowButton' onClick = {this.props.reserveClickHandler}>
        <ButtonText> Check availability </ButtonText>
      </Button>
    );
  }
}



export default ReserveNowButton;