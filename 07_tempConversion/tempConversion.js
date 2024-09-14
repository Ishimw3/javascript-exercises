const convertToCelsius = function(temperatureToConvert) {
  let convertedTemp = (temperatureToConvert - 32) * (5 / 9);
  return parseFloat(convertedTemp.toFixed(1));
};

const convertToFahrenheit = function(temperatureToConvert) {
  let convertedTemp = (9 / 5) * temperatureToConvert + 32;
  return parseFloat(convertedTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
