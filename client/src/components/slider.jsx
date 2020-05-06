import React from 'react';
import SliderContent from './sliderContent.jsx';


export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  render() {

    return (
      <div className = "slider">
        <div id = 'sliderContent'>
          <SliderContent />
        </div>
      </div>
    );
  }
}

