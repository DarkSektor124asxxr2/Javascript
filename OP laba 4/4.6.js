'use strict';

const max = (matrix) => {
  let currentMax = -Infinity;
  for (const row of matrix) {
    for (const el of row) {
      if (el > currentMax) currentMax = el;
    }
  }
  return currentMax;
};

module.exports = { max };
