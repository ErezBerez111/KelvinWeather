//kelvin degrees today is 293.
const kelvin = 293
//conveerting kelvin dergrees to Celsius
var celsius = kelvin - 273;
//converting celcius to farenheit
var farenheit = (celsius * (9 / 5) + 32);
//rounding down the degerees in farenheit
Math.floor(farenheit);
console.log(`The tempreture is ${farenheit} degrees farenheit.`);


