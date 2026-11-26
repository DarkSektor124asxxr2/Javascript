'use strict';

const ages = (persons) => {
  const result = {};
  for (const key in persons) {
    const data = persons[key];
    result[key] = data.died - data.born;
  }
  return result;
};

module.exports = { ages };
