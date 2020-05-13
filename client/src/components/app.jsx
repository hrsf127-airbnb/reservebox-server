import React from 'react';
import ReserveNowButton from './reserveNowButton.jsx';
import Slider from './slider.jsx';
import CalendarDummy from './CalendarDummy.jsx';
import styled from 'styled-components';
import dateParse from './dateParse.js';
import DropDown from './dropDown.jsx';
import $ from "jquery";
const port = 3000;


const AppBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 360px;
  height: 270px;
  border-radius: 12px;
  margin: 300px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  position: relative;

`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 315px;
  height: 35px;
  align-items: center;
  padding: 8px;
  position: relative;
  top: 15px;

`;


const PriceContainer = styled.div`
  // display: flex;
  // align-items: flex-end;

`;

const PriceNumberContainer = styled.div`
  font-size: 22px;
  font-family: 'Roboto', sans-serif;
  color: black;
  line-height: 26px;
  display: flex;
  align-items: flex-end;
`;

const PriceNightContainer = styled.div`
  display: flex;
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  color: black;
  font-weight: 200;
  display: flex;
  align-items: flex-end;

`;




const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  color: #949494;
  font-weight: 50;

`;

const GuestDatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 315px;
  height: 85px;
  border: solid .5px #b0b0b0;
  border-radius: 5px;
  overflow: hidden;

`;

const CheckInContainer = styled.div`
  flex-grow: 1;
  padding: 8px;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  color: black;
  font-weight: 50;
`;

const CheckOutContainer = styled.div`
  flex-grow: 1;
  padding: 8px;
  border-left: solid .4px  #b0b0b0;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  color: black;
  font-weight: 50;

`;

const GuestContainer = styled.div`
  padding: .5px;
  flex-grow: 1;
  padding: 8px;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  color: black;
  font-weight: 50;
`;

const PriceWrapper = styled.div`
  display: flex;

`;

const DatesWrapper = styled.div`
  border-bottom: solid .4px #b0b0b0;
  display: flex;
  width: 100%;
  flex-grow: 1;

`;

const InnerDateDiv = styled.div`
  font-size: 12px;
  padding: 0px;
  margin: 0px;
`;








class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      dateOne: '',
      dateTwo: '',
      isDateOne: true,
      calendarShow: false,
      initialData: '',
      dateStringOne: '',
      dateStringTwo: '',
      adults: 0,
      guestTrackerShow: false

    };
    this.clickHandler = this.clickHandler.bind(this);
    this.displayDateOne = this.displayDateOne.bind(this);
    this.displayDateTwo = this.displayDateTwo.bind(this);
    this.switchDate = this.switchDate.bind(this);
    this.reserveClickHandler = this.reserveClickHandler.bind(this);
    this.setAdults = this.setAdults.bind(this);
    this.guestTrackerFlip = this.guestTrackerFlip.bind(this);

  }

  componentDidMount() {
    $.ajax({
      url: `http://localhost:${port}/getInitialData/${Math.floor(Math.random()*100)}`,
      type: 'GET',
      success: (res) => {
          this.setState({
            initialData: res[0],
            dataID: res[0].id
          })
      }
  });

  }


  setAdults(e) {

    if (e.target.id === 'negative') {
      this.setState({
        adults: Math.max(this.state.adults - 1, 0)// this.state.adults++ doens't work bc it mutates the state
      })
    }

    if (e.target.id === 'positive') {
      this.setState({
        adults: Math.min(this.state.adults + 1, 12)
      })
    }


  }

  clickHandler() {
    var state = this.state.calendarShow === false ? true : false;

    this.setState({
      calendarShow: state
    })

    if (this.state.guestTrackerShow) {
      this.guestTrackerFlip();
    }
  }

  reserveClickHandler() {

    $.ajax({
      url: `http://localhost:${port}/recordDates`,
      type: 'POST',
      data: {
        dateOne: this.state.dateStringOne,
        dateTwo: this.state.dateStringTwo,
        dataID: this.state.dataID,
        adultNumber: this.state.adults
      },
      success: (res) => {
          console.log("Data sent to server successfully u sexy sweet potato")
      }
    });
  }


  // console.log("updated");
  // var dateStringOne = dateParse(this.state.dateOne);
  // var dateStringTwo = dateParse(this.state.dateTwo);

  // this.setState({
  //   dateStringOne: dateStringOne,
  //   dateStringTwo: dateStringTwo
  // })

  displayDateOne(date) {
    this.setState({
      dateOne: date,
      dateStringOne: dateParse(date)
    })
  }

  displayDateTwo(date) {
    this.setState({
      dateTwo: date,
      dateStringTwo: dateParse(date)
    })

  }

  switchDate(){
    this.setState({
      isDateOne: this.state.isDateOne === false ? true : false
    })

  }

  guestTrackerFlip() {
    this.setState({
      guestTrackerShow: this.state.guestTrackerShow === false ? true : false
    })
  }


  render() {
    var showCalendar = null;
    var calendarOnOff = null;

    if (!this.state.calendarShow) {
      calendarOnOff = 'hidden';
    }

    showCalendar = <Slider
    visibilityStyle = {calendarOnOff}
    displayDateOne = {this.displayDateOne}
    displayDateTwo = {this.displayDateTwo}
    dateOne = {this.state.dateOne}
    dateTwo = {this.state.dateTwo}
    isDateOne = {this.state.isDateOne}
    switchDate = {this.switchDate}
    />;


    var showGuestTracker = null;
    if (this.state.guestTrackerShow) {
      showGuestTracker = <DropDown adults = {this.state.adults} setAdults = {this.setAdults}/>
    }


    return (
      <div id = 'deleteLater'>
      <AppBox>
      {showCalendar}
        <TopBar>
          <PriceContainer>
            <PriceWrapper>
              <PriceNumberContainer>${this.state.initialData.nightPrice}</PriceNumberContainer>
              <PriceNightContainer>/ night</PriceNightContainer>
            </PriceWrapper>
          </PriceContainer>

          <RatingContainer> &#9733; {this.state.initialData.rating} ({this.state.initialData.reviewAmount}) </RatingContainer>

        </TopBar>

        {/* <CalendarDummy /> */}
        <GuestDatesContainer>
          <DatesWrapper onClick = {this.clickHandler}>
            <CheckInContainer dateOne = {this.state.dateOne}>
              Check In
              <InnerDateDiv> {this.state.dateStringOne} </InnerDateDiv>
            </CheckInContainer>
            <CheckOutContainer>
              Check Out
              <InnerDateDiv> {this.state.dateStringTwo} </InnerDateDiv>
            </CheckOutContainer>
          </DatesWrapper>
          <GuestContainer onClick = {this.guestTrackerFlip}>Guests</GuestContainer>
        </GuestDatesContainer>
        {showGuestTracker}
        <ReserveNowButton reserveClickHandler = {this.reserveClickHandler}/>
      </AppBox>
      </div>
    );
  }
}



export default App;