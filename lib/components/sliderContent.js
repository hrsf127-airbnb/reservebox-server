"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _calendar = _interopRequireDefault(require("./calendar.jsx"));

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

var SliderContent = /*#__PURE__*/function (_React$Component) {
  _inherits(SliderContent, _React$Component);

  var _super = _createSuper(SliderContent);

  function SliderContent(props) {
    var _this;

    _classCallCheck(this, SliderContent);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "renderEachMonth", function () {
      //fill helper function to fill (returns 5 for may)
      var monthArray = [];

      for (var i = 0; i < 12; i++) {
        var today = (0, _moment["default"])(_this.state.dateObject);
        today = today.add(i, 'M'); //be careful setting an object to another object!!

        monthArray.push(today);
      }

      console.log(monthArray);
      return monthArray;
    });

    _this.state = {
      dateObject: (0, _moment["default"])()
    };
    _this.renderEachMonth = _this.renderEachMonth.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SliderContent, [{
    key: "render",
    value: function render() {
      // loop through numbers of month 5 (today) to next may (5)
      //   pass number into props for Calendar
      //   render calendar for that month
      // render that calendar inside sliderContent
      var eachMonth = this.renderEachMonth().map(function (dateObject) {
        return /*#__PURE__*/_react["default"].createElement(_calendar["default"], {
          dateObject: dateObject
        });
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "sliderContent"
      }, eachMonth);
    }
  }]);

  return SliderContent;
}(_react["default"].Component);

exports["default"] = SliderContent;