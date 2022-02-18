const request = require('request-promise-native');

const fetchMyIP = function() {
  return request(`https://api.ipify.org/?format=json`);
};



module.exports = { fetchMyIP };