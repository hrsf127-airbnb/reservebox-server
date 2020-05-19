"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

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

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  height: 20px;\n  width: 20px;\n  display: block;\n  fill: currentcolor;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border: solid 1px red;\n  height: 20px;\n  width: 20px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border: solid 1px red;\n  height: 20px;\n  width: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 94%;\n  position: relative;\n  top: 27px;\n  left: 20px;\n  z-index: 3000;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// const ArrowsBox = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
// `;
var ArrowsBox = _styledComponents["default"].div(_templateObject());

var ArrowLeft = _styledComponents["default"].div(_templateObject2());

var ArrowRight = _styledComponents["default"].div(_templateObject3());

var SvgArrow = _styledComponents["default"].svg(_templateObject4());

var Arrows = /*#__PURE__*/function (_React$Component) {
  _inherits(Arrows, _React$Component);

  var _super = _createSuper(Arrows);

  function Arrows(props) {
    var _this;

    _classCallCheck(this, Arrows);

    _this = _super.call(this, props);
    _this.state = {
      date: new Date()
    };
    return _this;
  }

  _createClass(Arrows, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onClickLeft = _this$props.onClickLeft,
          onClickRight = _this$props.onClickRight;
      return /*#__PURE__*/_react["default"].createElement(ArrowsBox, {
        className: "arrows"
      }, /*#__PURE__*/_react["default"].createElement(ArrowLeft, {
        onClick: onClickLeft
      }, /*#__PURE__*/_react["default"].createElement(SvgArrow, {
        className: "svgArrow"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z",
        "fill-rule": "evenodd"
      }))), /*#__PURE__*/_react["default"].createElement(ArrowRight, {
        className: "arrowRight",
        onClick: onClickRight
      }, /*#__PURE__*/_react["default"].createElement(SvgArrow, null, /*#__PURE__*/_react["default"].createElement("path", {
        d: "m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z",
        "fill-rule": "evenodd"
      }))));
    }
  }]);

  return Arrows;
}(_react["default"].Component);

exports["default"] = Arrows;