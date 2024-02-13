const utils = {};

utils.await = promise => promise.then(data => [null, data]).catch(err => [err]);

utils.isArray = Array.isArray;
utils.isNumber = obj => typeof obj === 'number' && Number.isFinite(obj);
utils.isString = str => typeof str === 'string';
utils.isPlainObject = obj => typeof obj === 'object' && obj !== null && obj.toString() === '[object Object]';

utils.isEmpty = obj => {
  if (utils.isNumber(obj)) return false;
  if (utils.isArray(obj)) return !obj.length;
  if (utils.isPlainObject(obj)) return !Object.keys(obj).length;
  if (utils.isString(obj)) return !obj.length;
  return true;
};

module.exports = utils;
