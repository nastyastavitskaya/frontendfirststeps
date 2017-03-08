(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runAjax = runAjax;
function runAjax(token, successHandler) {
  $.ajax({
    type: 'GET',
    url: token,
    success: successHandler
  });
}

},{}],2:[function(require,module,exports){
'use strict';

var _constants = require('./constants');

var _handler = require('./handler');

var _handler2 = _interopRequireDefault(_handler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _loop = function _loop(i) {
  $("#" + _constants.tokenList[i]).click(function () {
    return (0, _handler2.default)(i);
  });
};

for (var i = 0; i < _constants.tokenList.length; i++) {
  _loop(i);
};

},{"./constants":3,"./handler":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tokenList = exports.tokenList = ['home', 'search', 'about'];

var elements = exports.elements = {};

for (var i = 0; i < tokenList.length; i++) {
  elements[tokenList[i]] = {
    menu: $("#" + tokenList[i]),
    content: $("#" + tokenList[i] + "Content")
  };
}

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handler;

var _constants = require('./constants');

var _ajax = require('./ajax');

var activeIndex = 0;

function successHandler(data) {
  var div = document.createElement('div');
  div.className = "alert alert-success alert-dismissable";
  div.innerHTML = "<a href='#'' class='close' data-dismiss='alert' aria-label='close'>&times;</a><strong>" + data + "</strong>";
  setTimeout(function () {
    return div.remove();
  }, 3000);
  _constants.elements[_constants.tokenList[activeIndex]].content.append(div);
}

function handler(newIndex) {
  _constants.elements[_constants.tokenList[activeIndex]].menu.removeClass("active");
  _constants.elements[_constants.tokenList[activeIndex]].content.addClass("hide");
  _constants.elements[_constants.tokenList[newIndex]].menu.addClass("active");
  _constants.elements[_constants.tokenList[newIndex]].content.removeClass("hide");
  activeIndex = newIndex;
  (0, _ajax.runAjax)('/api/' + _constants.tokenList[newIndex], successHandler);
}

},{"./ajax":1,"./constants":3}]},{},[2])

//# sourceMappingURL=app.js.map
