'use strict';

// Create Random Number
function ranNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var seattleShop = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSales: 6.3,
  openTime: 6,
  closeTime: 20,
  cookiesPerHour: function () {
    var perHour = [];
    var hour = [];
    for (var i = this.openTime; i < this.closeTime; i++) {
      perHour[i - this.openTime] = (randNum[this.minCust, this.maxCust] * this.avgCookieSales).fixFixed(0);
      hour[i - this.openTime] = i;
    }
  }
}

var tokyoShop = {
  name: 'Tokyo'
  minCust: 3,
  maxCust: 24,
  avgCookieSales: 1.2,
  openTime: 6,
  closeTime: 20,
  cookiesPerHour: function () {
    var perHour = [];
    var hour = [];
    for (var i = this.openTime; i < this.closeTime; i++) {
      perHour[i - this.openTime] = (randNum[this.minCust, this.maxCust] * this.avgCookieSales).fixFixed(0);
      hour[i - this.openTime] = i;
    }
  }
}

var dubaiShop = {
  name: 'Dubai'
  minCust: 11,
  maxCust: 38,
  avgCookieSales: 3.7,
  openTime: 6,
  closeTime: 20,
  cookiesPerHour: function () {
    var perHour = [];
    var hour = [];
    for (var i = this.openTime; i < this.closeTime; i++) {
      perHour[i - this.openTime] = (randNum[this.minCust, this.maxCust] * this.avgCookieSales).fixFixed(0);
      hour[i - this.openTime] = i;
    }
  }
}

var parisShop = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieSales: 2.3,
  openTime: 6,
  closeTime: 20,
  cookiesPerHour: function () {
    var perHour = [];
    var hour = [];
    for (var i = this.openTime; i < this.closeTime; i++) {
      perHour[i - this.openTime] = (randNum[this.minCust, this.maxCust] * this.avgCookieSales).fixFixed(0);
      hour[i - this.openTime] = i;
    }
  }
}

var limaShop = {
  name: 'Lima'
  minCust: 2,
  maxCust: 16,
  avgCookieSales: 4.6,
  openTime: 6,
  closeTime: 20,
  cookiesPerHour: function () {
    var perHour = [];
    var hour = [];
    for (var i = this.openTime; i < this.closeTime; i++) {
      perHour[i - this.openTime] = (randNum[this.minCust, this.maxCust] * this.avgCookieSales).fixFixed(0);
      hour[i - this.openTime] = i;
    }
  }
}

//#endregion