"use strict";

var _lightgallery = _interopRequireDefault(require("lightgallery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _lightgallery["default"])(document.getElementById('lightgallery'), {
  licenseKey: 'your_license_key',
  speed: 500 // ... other settings

});