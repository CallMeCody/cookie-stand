'use strict';
//=====================Global Variables=====================//
var hoursOfOperation = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var allShopArray = [];

//===========================Objects=========================//

var seattleShop = new Shop('Seattle', 23, 65, 6.3);
var tokyoShop = new Shop('Tokyo', 3, 24, 1.2);
var dubaiShop = new Shop('Dubai', 11, 38, 3.7);
var parisShop = new Shop('Paris', 20, 38, 2.3);
var limaShop = new Shop('Lima', 2, 16, 4.6);

// ====================Constructors==========================//

function Shop(name, minNumCustomers, maxNumCustomers, averageCookiesSold) {
  this.name = name;
  this.minNumCustomers = minNumCustomers;
  this.maxNumCustomers = maxNumCustomers;
  this.averageCookiesSold = averageCookiesSold;
  this.cookiesSold = [];
  allShopArray.push(this);
}

Shop.prototype.getHourlyCookiesSold = getHourlyCookiesSold;
Shop.prototype.renderTable = renderTable;

//=======================Event Listener======================//

var newShopEntry = document.getElementById('createEntry');

newShopEntry.addEventListener('submit', createNewShopEntry);
  
function createNewShopEntry(newShopEvent){
  newShopEvent.preventDefault();

  var name = newShopEvent.target.shopName.value;
  var minCustomer = newShopEvent.target.minCust.value;
  var maxCustomer = newShopEvent.target.maxCust.value;
  var avgCustomer = newShopEvent.target.avgCust.value;

  // console.log(name, minCustomer, maxCustomer, avgCustomer);
  var createNewShop = new Shop(name, minCustomer, maxCustomer, avgCustomer);
  createNewShop.renderTable();
  deleteRow();
  totalCookiesPerHour();
}

//======================Functions===========================//

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomCustomerCount(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCookieSum(cookies) {
  var sum = 0;
  for (var g = 0; g < cookies.length; g++)
  {
    sum+=cookies[g];
  }
  return sum;
}
// https://www.w3schools.com/jsref/met_table_deleterow.asp
var holdMyNumber = 6;
function deleteRow() {
  document.getElementById('shopTable').deleteRow(holdMyNumber);
  holdMyNumber += 1;
}

function getHourlyCookiesSold() {
  // var tempSum = 0;
  for (var i = 0; i < hoursOfOperation.length; i++)
  {
    // var hourlyTotals = 0;
    var randomNumbers = getRandomCustomerCount(this.minNumCustomers, this.maxNumCustomers);
    var totalHourlySales = Math.round(randomNumbers * this.averageCookiesSold);
    // console.log('ghcsTotal :', totalHourlySales);
    this.cookiesSold.push(totalHourlySales);//hourly cookie total sales per city pushed to array named cookiesSold
  }
}
// function dailyTotalSales() {
//   var totalCookies = getCookieSum(this.cookiesSold);
//   var totalList = document.getElementById('shopTable');
//   var cookieListTotal = document.createElement('li');
//   cookieListTotal.textContent = ('Total Cookies Sold: ' + totalCookies);
//   totalList.appendChild(cookieListTotal);
// }

function renderToPage() {
  //add items to html
  var parentUnorderedList = document.getElementById(this.listId);
  for (var j = 0; j < hoursOfOperation.length; j++)
  {
  var listItem = document.createElement('li');
  listItem.textContent = hoursOfOperation[j] + ': ' + this.cookiesSold[j] + ' cookies.';
  parentUnorderedList.appendChild(listItem);
  }
  var nameHeading = document.getElementById(this.headingId);
  var displayCity = document.createElement('h2');
  displayCity.textContent = this.name;
  nameHeading.appendChild(displayCity);
}

function renderHeading() {
  var table = document.getElementById('shopTable');
  var headerRow = document.createElement('tr');
  var headerCell = document.createElement('th');
  headerCell.textContent = 'City';
  headerRow.appendChild(headerCell);
  for(var i = 0; i < hoursOfOperation.length; i++) {
    var newCell = document.createElement('th');
    newCell.textContent = hoursOfOperation[i];
    headerRow.appendChild(newCell);
  }
  headerCell = document.createElement('th');
  headerCell.textContent = 'Daily Total: ';
  headerRow.appendChild(headerCell);
  table.appendChild(headerRow);
}

function renderTable() {
  this.getHourlyCookiesSold();
  var totalCookies = getCookieSum(this.cookiesSold);
  var table = document.getElementById('shopTable');
  var tableRow = document.createElement('tr');
  var tableCell = document.createElement('td');
  tableRow.appendChild(tableCell);
  tableCell.textContent = this.name;
  for (var i = 0; i < this.cookiesSold.length; i++) {
    tableCell = document.createElement('td');
    tableCell.textContent = this.cookiesSold[i];
    tableRow.appendChild(tableCell);
  }
  var tableCell = document.createElement('th');
  tableCell.textContent = totalCookies;
  tableRow.appendChild(tableCell);
  table.appendChild(tableRow);
}

function totalCookiesPerHour() {
  var tempCookies = 0;
  var totalCookies = 0;
  var table = document.getElementById('shopTable');
  var footerRow = document.createElement('tr');
  var footerCell = document.createElement('th');
  footerCell.textContent = 'Hourly Total: ';
  footerRow.appendChild(footerCell);
  for (var i = 0; i < hoursOfOperation.length; i++) {
    var totalCookies = 0;
    for( var j = 0; j < allShopArray.length; j++) {
      totalCookies += allShopArray[j].cookiesSold[i];
      tempCookies += allShopArray[j].cookiesSold[i];
    }
    var footerCell = document.createElement('td');
    footerCell.textContent = totalCookies;
    footerRow.appendChild(footerCell);
  }
  console.log('total cookies: ',tempCookies);
  footerCell = document.createElement('td');
  footerCell.textContent = tempCookies; //final number
  footerRow.appendChild(footerCell);
  table.appendChild(footerRow);
}

// //================Invokes===========================//

renderHeading();
seattleShop.renderTable();
tokyoShop.renderTable();
dubaiShop.renderTable();
parisShop.renderTable();
limaShop.renderTable();
totalCookiesPerHour();