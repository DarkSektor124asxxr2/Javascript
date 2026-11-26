'use strict';

const sum = (...args) => {
  let total = 0;
  for (const n of args) {
    total += n;
  }
  return total;
};

module.exports = { sum };
