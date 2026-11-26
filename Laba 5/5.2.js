'use strict';

const array = () => {
  const data = [];
  const get = (index) => data[index];
  get.push = (value) => data.push(value);
  get.pop = () => data.pop();
  return get;
};

module.exports = { array };
