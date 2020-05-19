import React from 'react';
import SliderContent from './sliderContent.jsx';
import Arrows from './arrows.jsx';
import styled from 'styled-components';

//NOTE:
//this box is the viewhole that hides most of sliderContent, which sits underneath.
//slider houses the buttons and the functions that make them operate.

// const SliderBox = styled.div`
//   border: solid 1px black;
//   height: 259px;
//   width: 526px; /* to display two calendars at once */
//   overflow: hidden;
//   z-index: 100;
//   background-color: white;
//   position: absolute;
//   top: 125px;
// `;



export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      sliderContentShift: 0
    };

    this.onClickLeft = this.onClickLeft.bind(this);
    this.onClickRight = this.onClickRight.bind(this);
  }

  onClickLeft = () => {
    let sliderContentShift = this.state.sliderContentShift; //TODO refactor this to top
    this.setState({
      sliderContentShift: Math.max(sliderContentShift - 262, 0)
    })
    // console.log("clicked");


  }

  onClickRight = () => {
    let sliderContentShift = this.state.sliderContentShift;
    this.setState({
      sliderContentShift: sliderContentShift + 262
    })

    // console.log("clicked");

  }



  render() {
    const SliderBox = styled.div`
    border: solid 1px black;
    height: 259px;
    width: 526px; /* to display two calendars at once */
    overflow: hidden;
    z-index: 100;
    background-color: white;
    position: absolute;
    top: 125px;
    visibility: ${this.props.visibilityStyle}
  `;

    return (
      <SliderBox className = "slider">
        <Arrows onClickLeft = {this.onClickLeft.bind(this)} onClickRight = {this.onClickRight.bind(this)}/>
        <SliderContent shift = {this.state.sliderContentShift} displayDateOne = {this.props.displayDateOne} displayDateTwo = {this.props.displayDateTwo} dateOne = {this.props.dateOne} dateTwo = {this.props.dateTwo} isDateOne = {this.props.isDateOne} switchDate = {this.props.switchDate}/>
      </SliderBox>
    );
  }
}

