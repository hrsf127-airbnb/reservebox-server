import React from 'react';
import ReserveNowButton from './reserveNowButton.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <ReserveNowButton />
      </div>
    );
  }
}



export default App;