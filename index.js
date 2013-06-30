"use strict";

module.exports = function (element, path, separator) {
  var next, _element;

  separator = separator !== undefined ? separator : '.';
  
  path = path.split(separator);
  _element = element;
  
  while(path.length && _element) {
    next = path.shift();
    _element = _element[next];
  }
  
  return _element;
};
