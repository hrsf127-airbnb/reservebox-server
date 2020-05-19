"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _sliderContent = _interopRequireDefault(require("./sliderContent.jsx"));

var _arrows = _interopRequireDefault(require("./arrows.jsx"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    border: solid 1px black;\n    height: 259px;\n    width: 526px; /* to display two calendars at once */\n    overflow: hidden;\n    z-index: 100;\n    background-color: white;\n    position: absolute;\n    top: 125px;\n    visibility: ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
var Slider = /*#__PURE__*/function (_React$Component) {
  _inherits(Slider, _React$Component);

  var _super = _createSuper(Slider);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onClickLeft", function () {
      var sliderContentShift = _this.state.sliderContentShift; //TODO refactor this to top

      _this.setState({
        sliderContentShift: Math.max(sliderContentShift - 262, 0)
      }); // console.log("clicked");

    });

    _defineProperty(_assertThisInitialized(_this), "onClickRight", function () {
      var sliderContentShift = _this.state.sliderContentShift;

      _this.setState({
        sliderContentShift: sliderContentShift + 262
      }); // console.log("clicked");

    });

    _this.state = {
      date: new Date(),
      sliderContentShift: 0
    };
    _this.onClickLeft = _this.onClickLeft.bind(_assertThisInitialized(_this));
    _this.onClickRight = _this.onClickRight.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Slider, [{
    key: "render",
    value: function render() {
      var SliderBox = _styledComponents["default"].div(_templateObject(), this.props.visibilityStyle);

      return /*#__PURE__*/_react["default"].createElement(SliderBox, {
        className: "slider"
      }, /*#__PURE__*/_react["default"].createElement(_arrows["default"], {
        onClickLeft: this.onClickLeft.bind(this),
        onClickRight: this.onClickRight.bind(this)
      }), /*#__PURE__*/_react["default"].createElement(_sliderContent["default"], {
        shift: this.state.sliderContentShift,
        displayDateOne: this.props.displayDateOne,
        displayDateTwo: this.props.displayDateTwo,
        dateOne: this.props.dateOne,
        dateTwo: this.props.dateTwo,
        isDateOne: this.props.isDateOne,
        switchDate: this.props.switchDate
      }));
    }
  }]);

  return Slider;
}(_react["default"].Component);

exports["default"] = Slider;