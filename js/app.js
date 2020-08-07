'use strict';


var hoursOfOperation = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var seattleShop = shop('Seattle', 23, 65, 6.3);
var tokyoShop = shop('Tokyo', 3, 24, 1.2);
var dubaiShop = shop('Dubai', 11, 38, 3.7);
var parisShop = shop('Paris', 20, 38, 2.3);
var limaShop = shop('Lima', 2, 16, 4.6);

function shop(name, minCustomers, maxCustomers, averageCookiesSold) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookiesSold = averageCookiesSold;
}
