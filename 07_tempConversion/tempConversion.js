const convertToCelsius = function(toCelsius) {

  toCelsius = (toCelsius - 32)*(5/9);
  return +toCelsius.toFixed(1);

};

const convertToFahrenheit = function(toFahrenheit) {

  toFahrenheit = ((toFahrenheit)*(9/5))+32;
  return +toFahrenheit.toFixed(1);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
