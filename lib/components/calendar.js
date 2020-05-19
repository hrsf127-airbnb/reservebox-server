"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = _interopRequireDefault(require("../../dist/styles.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  width: 30px;\n  height: 30px;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  font-size: 14px;\n  line-height: 23px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  font-size: 14px;\n  line-height: 23px;\n  font-weight: 2000;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  height: 30px;\n  width: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0px;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  font-size: 14px;\n  line-height: 23px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  height: 30px;\n  width: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: flex-start;\n  width: 210px;\n  padding: 0px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: solid 1px black;\n  margin: 0 25px 0 25px;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var weekday = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

var CalendarBox = _styledComponents["default"].tbody(_templateObject());

var CalWrapper = _styledComponents["default"].tr(_templateObject2());

var BlankDay = _styledComponents["default"].td(_templateObject3());

var FilledDay = _styledComponents["default"].td(_templateObject4());

var MonthName = _styledComponents["default"].div(_templateObject5());

var WeekdayShort = _styledComponents["default"].th(_templateObject6());

var Calendar = /*#__PURE__*/function (_React$Component) {
  _inherits(Calendar, _React$Component);

  var _super = _createSuper(Calendar);

  function Calendar(props) {
    var _this;

    _classCallCheck(this, Calendar);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "firstDayOfMonth", function () {
      //returns 5 in May for some reason, but still accurately renders in blankFiller
      var dateObject = _this.state.dateObject;
      var firstDay = (0, _moment["default"])(dateObject).startOf("month").format("d");
      return firstDay;
    });

    _defineProperty(_assertThisInitialized(_this), "blankFiller", function () {
      var blanks = [];

      for (var i = 0; i < _this.firstDayOfMonth(); i++) {
        blanks.push( /*#__PURE__*/_react["default"].createElement(BlankDay, {
          id: "blankDay",
          onClick: function onClick(e) {
            return _this.props.clickHandler(e);
          }
        }, ""));
      }

      return blanks;
    });

    _defineProperty(_assertThisInitialized(_this), "dateFiller", function () {
      var dateObject = _this.state.dateObject;
      var daysInMonth = [];

      for (var d = 1; d <= dateObject.daysInMonth(); d++) {
        daysInMonth.push( /*#__PURE__*/_react["default"].createElement(FilledDay, {
          id: "filledDay",
          key: "day" && d,
          className: "@" + _this.state.dateObject.format('MMMM') + "@" + _this.state.dateObject.format('YYYY') + "@" + String(d),
          onClick: function onClick(e) {
            return _this.props.clickHandler(e);
          }
        }, d));
      }

      return daysInMonth;
    });

    _this.state = {
      dateObject: props.dateObject
    };
    _this.dateFiller = _this.dateFiller.bind(_assertThisInitialized(_this));
    _this.blankFiller = _this.blankFiller.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Calendar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var listOfDates = document.getElementsByTagName("TD"); //TODO ask jordan about this

      var _iterator = _createForOfIteratorHelper(listOfDates),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var td = _step.value;

          if (td.className === this.props.dateOne) {
            td.style.borderRadius = '50%';
            td.style.border = 'solid 1px black';
          } else if (td.className === this.props.dateTwo) {
            td.style.borderRadius = '50%';
            td.style.border = 'solid 1px black';
          } else {
            td.style.borderRadius = '';
            td.style.border = '';
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var hTMLarray = document.getElementsByClassName(this.props.dateOne);

      if (hTMLarray.length !== 0) {
        hTMLarray[0].style.borderRadius = '50%';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var listItems = weekday.map(function (day) {
        return /*#__PURE__*/_react["default"].createElement(WeekdayShort, {
          id: "weekdayshort"
        }, day);
      });
      var blankDays = this.blankFiller().map(function (blankDay) {
        return blankDay;
      });
      var filledDays = this.dateFiller().map(function (filledDay) {
        return filledDay;
      });
      return /*#__PURE__*/_react["default"].createElement(CalendarBox, {
        className: "calendar"
      }, /*#__PURE__*/_react["default"].createElement(MonthName, {
        id: "monthName"
      }, (0, _moment["default"])(this.state.dateObject).format('MMMM') + " " + (0, _moment["default"])(this.state.dateObject).format('YYYY')), listItems, /*#__PURE__*/_react["default"].createElement(CalWrapper, {
        id: "calWrapper"
      }, blankDays, filledDays));
    }
  }]);

  return Calendar;
}(_react["default"].Component);

exports["default"] = Calendar;