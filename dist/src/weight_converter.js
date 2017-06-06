"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.kilosToPounds = kilosToPounds;
exports.poundsToKilos = poundsToKilos;

var aux = 2.20462;

function kilosToPounds() {
  for (var _len = arguments.length, kilos = Array(_len), _key = 0; _key < _len; _key++) {
    kilos[_key] = arguments[_key];
  }

  var result = kilos.map(function (kilo) {
    var pounds = kilo * aux;
    return parseFloat(pounds.toFixed(2));
  });

  if (result.length == 1) {
    result = result[0];
  }

  return result;
}

function poundsToKilos() {
  for (var _len2 = arguments.length, pounds = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    pounds[_key2] = arguments[_key2];
  }

  var result = pounds.map(function (pond) {
    var kilos = pound / aux;
    return parseFloat(kilos.toFixed(2));
  });

  if (result.length == 1) {
    result = result[0];
  }

  return result;
}