"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var weekday = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

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
        blanks.push( /*#__PURE__*/_react["default"].createElement("td", {
          className: "calendar-day empty"
        }, ""));
      }

      return blanks;
    });

    _defineProperty(_assertThisInitialized(_this), "dateFiller", function () {
      var dateObject = _this.state.dateObject;
      var daysInMonth = [];

      for (var d = 1; d <= dateObject.daysInMonth(); d++) {
        daysInMonth.push( /*#__PURE__*/_react["default"].createElement("td", {
          key: d,
          className: "calendar-day"
        }, d));
      }

      return daysInMonth;
    });

    _this.state = {
      dateObject: props.dateObject
    };
    return _this;
  }

  _createClass(Calendar, [{
    key: "render",
    value: function render() {
      var listItems = weekday.map(function (day) {
        return /*#__PURE__*/_react["default"].createElement("th", {
          id: "weekdayshort"
        }, day);
      });
      var blankDays = this.blankFiller().map(function (blankDay) {
        return /*#__PURE__*/_react["default"].createElement("td", {
          id: "blankDay"
        }, blankDay);
      });
      var filledDays = this.dateFiller().map(function (filledDay) {
        return /*#__PURE__*/_react["default"].createElement("td", {
          id: "filledDay"
        }, filledDay);
      });
      return /*#__PURE__*/_react["default"].createElement("tbody", {
        className: "calendar"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "monthName"
      }, " ", (0, _moment["default"])(this.state.dateObject).format('MMMM'), " "), listItems, /*#__PURE__*/_react["default"].createElement("tr", {
        id: "calWrapper"
      }, blankDays, filledDays));
    }
  }]);

  return Calendar;
}(_react["default"].Component);

exports["default"] = Calendar;