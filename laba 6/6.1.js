'use strict';

const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new Error('All arguments must be functions');
    }
  }
  return (x) => fns.reduce((val, fn) => fn(val), x);
};

module.exports = { pipe };
