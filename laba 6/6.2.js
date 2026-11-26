'use strict';

const compose = (...fns) => {
  const handlers = [];
  const composed = (x) => {
    let res = x;
    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        res = fns[i](res);
      }
      return res;
    } catch (err) {
      for (const handler of handlers) {
        handler(err);
      }
      return undefined;
    }
  };
  composed.on = (name, fn) => {
    if (name === 'error') handlers.push(fn);
  };
  return composed;
};

module.exports = { compose };
