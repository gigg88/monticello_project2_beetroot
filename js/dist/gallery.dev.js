"use strict";

var _lightgallery = _interopRequireDefault(require("lightgallery"));

var _thumbnail = _interopRequireDefault(require("lightgallery/plugins/thumbnail"));

var _zoom = _interopRequireDefault(require("lightgallery/plugins/zoom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _lightgallery["default"])(document.getElementById('lightgallery'), {
  licenseKey: '0000-0000-000-0000',
  speed: 500
});