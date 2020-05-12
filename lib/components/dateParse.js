"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var dateParse = function dateParse(date) {
  if (date) {
    var splitString = date.split('@');
    var splitDate = splitString.slice(splitString.length - 3, splitString.length);
    var month = splitDate[0];
    var year = splitDate[1];
    var day = splitDate[2];
    var date = String(day) + " " + String(month) + " " + String(year);
    return date;
  }
};

var _default = dateParse;
exports["default"] = _default;