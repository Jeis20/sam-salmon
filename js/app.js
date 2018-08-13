'use strict';

//Declare hours of operations
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Declare object and properties for 1st and Pike Location
var firstPike = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiePerSale: 6.3,
  dailyCookieSales: [],
  dailyTotalCustomers: []
};

// Generate a random integer
function randomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //The maximum is inclusive and the minimum is inclusive
}

// Calculate number of cookies sold each hour

