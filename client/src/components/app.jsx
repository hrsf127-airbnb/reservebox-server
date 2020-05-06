import React from 'react';
import ReserveNowButton from './reserveNowButton.jsx';
import Slider from './slider.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()

    };
  }

  render() {
    return (
      <div>
        <Slider />
        {/* <ReserveNowButton /> */}
      </div>
    );
  }
}



export default App;