"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reserveNowButton = _interopRequireDefault(require("./reserveNowButton.jsx"));

var _slider = _interopRequireDefault(require("./slider.jsx"));

var _CalendarDummy = _interopRequireDefault(require("./CalendarDummy.jsx"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dateParse = _interopRequireDefault(require("./dateParse.js"));

var _dropDown = _interopRequireDefault(require("./dropDown.jsx"));

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n  padding: 0px;\n  margin: 0px;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  border-bottom: solid .4px #b0b0b0;\n  display: flex;\n  width: 100%;\n  flex-grow: 1;\n\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  padding: .5px;\n  flex-grow: 1;\n  padding: 8px;\n  font-size: 14px;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  font-weight: 50;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  flex-grow: 1;\n  padding: 8px;\n  border-left: solid .4px  #b0b0b0;\n  font-size: 14px;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  font-weight: 50;\n\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  flex-grow: 1;\n  padding: 8px;\n  font-size: 14px;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  font-weight: 50;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 315px;\n  height: 85px;\n  border: solid .5px #b0b0b0;\n  border-radius: 5px;\n  overflow: hidden;\n\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  font-family: 'Roboto', sans-serif;\n  color: #949494;\n  font-weight: 50;\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  font-size: 12px;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  font-weight: 200;\n  display: flex;\n  align-items: flex-end;\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 22px;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  line-height: 26px;\n  display: flex;\n  align-items: flex-end;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  // display: flex;\n  // align-items: flex-end;\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 315px;\n  height: 35px;\n  align-items: center;\n  padding: 8px;\n  position: relative;\n  top: 15px;\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  width: 360px;\n  height: 270px;\n  border-radius: 12px;\n  margin: 300px;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;\n  position: relative;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var port = 3000;

var AppBox = _styledComponents["default"].div(_templateObject());

var TopBar = _styledComponents["default"].div(_templateObject2());

var PriceContainer = _styledComponents["default"].div(_templateObject3());

var PriceNumberContainer = _styledComponents["default"].div(_templateObject4());

var PriceNightContainer = _styledComponents["default"].div(_templateObject5());

var RatingContainer = _styledComponents["default"].div(_templateObject6());

var GuestDatesContainer = _styledComponents["default"].div(_templateObject7());

var CheckInContainer = _styledComponents["default"].div(_templateObject8());

var CheckOutContainer = _styledComponents["default"].div(_templateObject9());

var GuestContainer = _styledComponents["default"].div(_templateObject10());

var PriceWrapper = _styledComponents["default"].div(_templateObject11());

var DatesWrapper = _styledComponents["default"].div(_templateObject12());

var InnerDateDiv = _styledComponents["default"].div(_templateObject13());

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.state = {
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
    _this.clickHandler = _this.clickHandler.bind(_assertThisInitialized(_this));
    _this.displayDateOne = _this.displayDateOne.bind(_assertThisInitialized(_this));
    _this.displayDateTwo = _this.displayDateTwo.bind(_assertThisInitialized(_this));
    _this.switchDate = _this.switchDate.bind(_assertThisInitialized(_this));
    _this.reserveClickHandler = _this.reserveClickHandler.bind(_assertThisInitialized(_this));
    _this.setAdults = _this.setAdults.bind(_assertThisInitialized(_this));
    _this.guestTrackerFlip = _this.guestTrackerFlip.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _jquery["default"].ajax({
        url: "http://localhost:3000/getInitialData/".concat(Math.floor(Math.random() * 100)),
        type: 'GET',
        success: function success(res) {
          _this2.setState({
            initialData: res[0],
            dataID: res[0].id
          });
        }
      });
    }
  }, {
    key: "setAdults",
    value: function setAdults(e) {
      if (e.target.id === 'negative') {
        this.setState({
          adults: Math.max(this.state.adults - 1, 0) // this.state.adults++ doens't work bc it mutates the state

        });
      }

      if (e.target.id === 'positive') {
        this.setState({
          adults: Math.min(this.state.adults + 1, 12)
        });
      }
    }
  }, {
    key: "clickHandler",
    value: function clickHandler() {
      var state = this.state.calendarShow === false ? true : false;
      this.setState({
        calendarShow: state
      });

      if (this.state.guestTrackerShow) {
        this.guestTrackerFlip();
      }
    }
  }, {
    key: "reserveClickHandler",
    value: function reserveClickHandler() {
      _jquery["default"].ajax({
        url: "/recordDates",
        type: 'POST',
        data: {
          dateOne: this.state.dateStringOne,
          dateTwo: this.state.dateStringTwo,
          dataID: this.state.dataID,
          adultNumber: this.state.adults
        },
        success: function success(res) {
          console.log("Data sent to server successfully u sexy sweet potato");
        }
      });
    } // console.log("updated");
    // var dateStringOne = dateParse(this.state.dateOne);
    // var dateStringTwo = dateParse(this.state.dateTwo);
    // this.setState({
    //   dateStringOne: dateStringOne,
    //   dateStringTwo: dateStringTwo
    // })

  }, {
    key: "displayDateOne",
    value: function displayDateOne(date) {
      this.setState({
        dateOne: date,
        dateStringOne: (0, _dateParse["default"])(date)
      });
    }
  }, {
    key: "displayDateTwo",
    value: function displayDateTwo(date) {
      this.setState({
        dateTwo: date,
        dateStringTwo: (0, _dateParse["default"])(date)
      });
    }
  }, {
    key: "switchDate",
    value: function switchDate() {
      this.setState({
        isDateOne: this.state.isDateOne === false ? true : false
      });
    }
  }, {
    key: "guestTrackerFlip",
    value: function guestTrackerFlip() {
      this.setState({
        guestTrackerShow: this.state.guestTrackerShow === false ? true : false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var showCalendar = null;
      var calendarOnOff = null;

      if (!this.state.calendarShow) {
        calendarOnOff = 'hidden';
      }

      showCalendar = /*#__PURE__*/_react["default"].createElement(_slider["default"], {
        visibilityStyle: calendarOnOff,
        displayDateOne: this.displayDateOne,
        displayDateTwo: this.displayDateTwo,
        dateOne: this.state.dateOne,
        dateTwo: this.state.dateTwo,
        isDateOne: this.state.isDateOne,
        switchDate: this.switchDate
      });
      var showGuestTracker = null;

      if (this.state.guestTrackerShow) {
        showGuestTracker = /*#__PURE__*/_react["default"].createElement(_dropDown["default"], {
          adults: this.state.adults,
          setAdults: this.setAdults
        });
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        id: "deleteLater"
      }, /*#__PURE__*/_react["default"].createElement(AppBox, null, showCalendar, /*#__PURE__*/_react["default"].createElement(TopBar, null, /*#__PURE__*/_react["default"].createElement(PriceContainer, null, /*#__PURE__*/_react["default"].createElement(PriceWrapper, null, /*#__PURE__*/_react["default"].createElement(PriceNumberContainer, null, "$", this.state.initialData.nightPrice), /*#__PURE__*/_react["default"].createElement(PriceNightContainer, null, "/ night"))), /*#__PURE__*/_react["default"].createElement(RatingContainer, null, " \u2605 ", this.state.initialData.rating, " (", this.state.initialData.reviewAmount, ") ")), /*#__PURE__*/_react["default"].createElement(GuestDatesContainer, null, /*#__PURE__*/_react["default"].createElement(DatesWrapper, {
        onClick: this.clickHandler
      }, /*#__PURE__*/_react["default"].createElement(CheckInContainer, {
        dateOne: this.state.dateOne
      }, "Check In", /*#__PURE__*/_react["default"].createElement(InnerDateDiv, null, " ", this.state.dateStringOne, " ")), /*#__PURE__*/_react["default"].createElement(CheckOutContainer, null, "Check Out", /*#__PURE__*/_react["default"].createElement(InnerDateDiv, null, " ", this.state.dateStringTwo, " "))), /*#__PURE__*/_react["default"].createElement(GuestContainer, {
        onClick: this.guestTrackerFlip
      }, "Guests")), showGuestTracker, /*#__PURE__*/_react["default"].createElement(_reserveNowButton["default"], {
        reserveClickHandler: this.reserveClickHandler
      })));
    }
  }]);

  return App;
}(_react["default"].Component);

var _default = App;
exports["default"] = _default;