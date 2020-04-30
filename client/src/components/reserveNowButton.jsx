import React from 'react';

class ReserveNowButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div className = 'bttn bttn--reserveColor bttn__responsive' id = 'reserveNowButton'>
        <span class="reserveNowButtonText"> Check availability </span>
      </div>
    );
  }
}



export default ReserveNowButton;