import React from 'react';
import styled from 'styled-components';

// const ArrowsBox = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;

// `;

const ArrowsBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 94%;
  position: relative;
  top: 27px;
  left: 20px;
  z-index: 3000;
`;

const ArrowLeft = styled.div`
  border: solid 1px red;
  height: 20px;
  width: 20px;
`;

const ArrowRight = styled.div`
  border: solid 1px red;
  height: 20px;
  width: 20px;
`;

const SvgArrow = styled.svg`
  height: 20px;
  width: 20px;
  display: block;
  fill: currentcolor;
`;


export default class Arrows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }


  render() {
    const {onClickLeft, onClickRight} = this.props;
    return (
      <ArrowsBox className = 'arrows'>
        <ArrowLeft onClick = {onClickLeft}>
          <SvgArrow className = "svgArrow">
            {/* magic below that draws the arrows from scratch. saves on load time. */}
            <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fill-rule="evenodd"></path>
          </SvgArrow>
        </ArrowLeft>
        <ArrowRight className = "arrowRight" onClick = {onClickRight}>
          <SvgArrow>
            <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fill-rule="evenodd"></path>
          </SvgArrow>
        </ArrowRight>
      </ArrowsBox>
    );
  }
}

