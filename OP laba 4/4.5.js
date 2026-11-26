'use strict';

const sum = (...args) => {
  return args.reduce((acc, el) => acc + el, 0);
};

module.exports = { sum };
