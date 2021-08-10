'use strict';

let salesid = document.getElementById('container');

let tabElementmain = document.createElement('table');
salesid.appendChild(tabElementmain);

let trElementmain = document.createElement('tr');
tabElementmain.appendChild(trElementmain);

let time = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];

let allOdCookes = [];

let arrOfObj = [];

function StoreLocation(minPH, maxPH, city, cookesAvg) {
  this.minPH = minPH;
  this.maxPH = maxPH;
  this.city = city;
  this.coockesTotal = 0;
  this.cookesAvg = cookesAvg;
  this.sumOfTotal = [];
  arrOfObj.push(this);
}

StoreLocation.prototype.ranNum = function (min, max) {
  let ranNumOfCust = Math.floor(Math.random() * (max - min + 1) + min);
  return ranNumOfCust;
};
StoreLocation.prototype.getcookesPH = function (cust, avg) {
  let cookesPH = Math.round(cust * avg);
  return cookesPH;
};
StoreLocation.prototype.finalREsalt = function () {
  for (let i = 0; i < time.length; i++) {
    this.sumOfTotal.push(this.getcookesPH(this.ranNum(this.minPH, this.maxPH), this.cookesAvg));
    this.coockesTotal += this.sumOfTotal[i];
  }
  return this.sumOfTotal;
};

StoreLocation.prototype.render = function () {

  let tr1Elementmain = document.createElement('tr');
  tabElementmain.appendChild(tr1Elementmain);

  let thElement1main = document.createElement('th');
  thElement1main.textContent = this.locationName;
  tr1Elementmain.appendChild(thElement1main);

  for (let i = 0; i < this.sumOfTotal.length; i++) {
    let tdElement2main = document.createElement('td');
    tdElement2main.textContent = this.sumOfTotal[i];
    tr1Elementmain.appendChild(tdElement2main);
  }
  let tdElement2main = document.createElement('td');
  tdElement2main.textContent = this.coockesTotal;
  tr1Elementmain.appendChild(tdElement2main);
  allOdCookes.push(this.coockesTotal)[0];
};

let seattle = new StoreLocation(23, 65, 'Seattle', 6.3, []);
let tokyo = new StoreLocation(3, 24, 'Tokyo', 1.2, []);
let dubai = new StoreLocation(11, 38, 'Dubai', 3.7, []);
let paris = new StoreLocation(20, 38, 'Paris', 2.3, []);
let lima = new StoreLocation(2, 16, 'Lima', 4.6, []);

let StoreLocationArr = [seattle, tokyo, dubai, paris, lima];

for (let i = 0; i < StoreLocationArr.length; i++) {
  StoreLocationArr[i].finalREsalt();
  StoreLocationArr[i].render();
}

function tableTop() {
  time.unshift('');
  time.push('Total of daily total');
  for (let i = 0; i < time.length; i++) {
    let th1Elementmain = document.createElement('th');
    th1Elementmain.textContent = time[i];
    trElementmain.appendChild(th1Elementmain);
  }
  time.shift();
  time.pop();
}

tableTop();

function tableBottom() {

  let trBottomlementmain = document.createElement('tr');
  tabElementmain.appendChild(trBottomlementmain);

  let totalElementmain = document.createElement('th');
  totalElementmain.textContent = 'total';
  trBottomlementmain.appendChild(totalElementmain);

  for (let i = 0; i < time.length; i++) {
    let totalColommain = 0;
    for (let m = 0; m < arrOfObj.length; m++) {
      totalColommain += arrOfObj[m].sumOfTotal[i];
    }
    let td2Elementmain = document.createElement('td');
    td2Elementmain.textContent = totalColommain;
    trBottomlementmain.appendChild(td2Elementmain);
  }

  let valueOfTotalmain = allOdCookes;
  let totalmain = valueOfTotalmain.reduce(function (accum, currVal) { return accum + currVal; }, 0);

  let totalOfTotalmain = document.createElement('td');
  totalOfTotalmain.textContent = totalmain;
  trBottomlementmain.appendChild(totalOfTotalmain);
}

tableBottom();

let cityForm = document.getElementById('locationForm');
cityForm.addEventListener('submit', formData);

function formData(event) {
  event.preventDefault();
  let cityName = event.target.nameOflocation.value;
  let minNew = parseInt(event.target.minCustomersNumber.value);
  let maxnew = parseInt(event.target.maxCustomersNumber.value);
  let cookiesAveragenew = parseInt(event.target.cookiesAverage.value);
  let newCity = new StoreLocation(minNew, maxnew, cityName, cookiesAveragenew, []);
  newCity.finalREsalt();
  newCity.render();
  tabElementmain.deleteRow(arrOfObj.length);
  tableBottom();
  cityForm.reset();
}

