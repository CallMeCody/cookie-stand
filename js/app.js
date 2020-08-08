'use strict';

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattleShop = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSales: 6.3,
  sales: [],
  getRandInt: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  salesData: function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      this.sales.push(Math.ceil(this.getRandInt(this.minCust, this.maxCust) * this.avgCookieSales));
    }
  },

  render: function () {
    // call/invoke our salesData method
    this.salesData();
    // render to the DOM our sales array property
    // step 1. find the target in the HTML
    var seattleShop = document.getElementById('seattle');
    var total = 0;
    for (var i = 0; i < this.sales.length; i++) {
      // step 2. create the element
      // step 2(optional). populate the text
      var liE1 = document.createElement('li');
      liE1.textContent = `${hoursOpen[i]}: ${this.sales[i]} cookies`;
      // 6am: 16 cookies
      // step 3. append it to the DOM
      total = total + this.sales[i];
      seattleShop.append(liE1);
    }
    console.log(total);
  }
};

seattleShop.render();
seattleShop.salesData();
console.log(seattleShop.sales);


var tokyoShop = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSales: 1.2,
  sales: [],
  getRandInt: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  salesData: function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      this.sales.push(Math.ceil(this.getRandInt(this.minCust, this.maxCust) * this.avgCookieSales));
    }
  },

  render: function () {
    // call/invoke our salesData method
    this.salesData();
    // render to the DOM our sales array property
    // step 1. find the target in the HTML
    var tokyoShop = document.getElementById('tokyo');
    var total = 0;
    for (var i = 0; i < this.sales.length; i++) {
      // step 2. create the element
      // step 2(optional). populate the text
      var liE1 = document.createElement('li');
      liE1.textContent = `${hoursOpen[i]}: ${this.sales[i]} cookies`;
      // 6am: 16 cookies
      // step 3. append it to the DOM
      total = total + this.sales[i];
      tokyoShop.append(liE1);
    }
    console.log(total);
  }
};

tokyoShop.render();
tokyoShop.salesData();
console.log(tokyoShop.sales);

var dubaiShop = {
  name: 'dubai',
  minCust: 3,
  maxCust: 24,
  avgCookieSales: 1.2,
  sales: [],
  getRandInt: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  salesData: function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      this.sales.push(Math.ceil(this.getRandInt(this.minCust, this.maxCust) * this.avgCookieSales));
    }
  },

  render: function () {
    // call/invoke our salesData method
    this.salesData();
    // render to the DOM our sales array property
    // step 1. find the target in the HTML
    var dubaiShop = document.getElementById('dubai');
    var total = 0;
    for (var i = 0; i < this.sales.length; i++) {
      // step 2. create the element
      // step 2(optional). populate the text
      var liE1 = document.createElement('li');
      liE1.textContent = `${hoursOpen[i]}: ${this.sales[i]} cookies`;
      // 6am: 16 cookies
      // step 3. append it to the DOM
      total = total + this.sales[i];
      dubaiShop.append(liE1);
    }
    console.log(total);
  }
};

dubaiShop.render();
dubaiShop.salesData();
console.log(dubaiShop.sales);

var parisShop = {
  name: 'paris',
  minCust: 3,
  maxCust: 24,
  avgCookieSales: 1.2,
  sales: [],
  getRandInt: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  salesData: function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      this.sales.push(Math.ceil(this.getRandInt(this.minCust, this.maxCust) * this.avgCookieSales));
    }
  },

  render: function () {
    // call/invoke our salesData method
    this.salesData();
    // render to the DOM our sales array property
    // step 1. find the target in the HTML
    var parisShop = document.getElementById('paris');
    var total = 0;
    for (var i = 0; i < this.sales.length; i++) {
      // step 2. create the element
      // step 2(optional). populate the text
      var liE1 = document.createElement('li');
      liE1.textContent = `${hoursOpen[i]}: ${this.sales[i]} cookies`;
      // 6am: 16 cookies
      // step 3. append it to the DOM
      total = total + this.sales[i];
      parisShop.append(liE1);
    }
    console.log(total);
  }
};

parisShop.render();
parisShop.salesData();
console.log(parisShop.sales);

var limaShop = {
  name: 'lima',
  minCust: 3,
  maxCust: 24,
  avgCookieSales: 1.2,
  sales: [],
  getRandInt: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  salesData: function () {
    for (var i = 0; i < hoursOpen.length; i++) {
      this.sales.push(Math.ceil(this.getRandInt(this.minCust, this.maxCust) * this.avgCookieSales));
    }
  },

  render: function () {
    // call/invoke our salesData method
    this.salesData();
    // render to the DOM our sales array property
    // step 1. find the target in the HTML
    var limaShop = document.getElementById('lima');
    var total = 0;
    for (var i = 0; i < this.sales.length; i++) {
      // step 2. create the element
      // step 2(optional). populate the text
      var liE1 = document.createElement('li');
      liE1.textContent = `${hoursOpen[i]}: ${this.sales[i]} cookies`;
      // 6am: 16 cookies
      // step 3. append it to the DOM
      total = total + this.sales[i];
      limaShop.append(liE1);
    }
    console.log(total);
  }
};

limaShop.render();
limaShop.salesData();
console.log(limaShop.sales);
