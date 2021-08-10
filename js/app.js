'use strict';

let allOfPro = document.getElementById('container');

let time = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];

let cookiesArrTotal = [];

let arrayOfOpject = [];

function StoreLocation(minPH, maxPH, city, cookesAvg) {
  this.minPH = minPH;
  this.maxPH = maxPH;
  this.city = city;
  this.coockesTotal = 0;
  this.cookesAvg = cookesAvg;
  this.sumOfTotal = [];
  arrayOfOpject.push(this);
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
  let secEL = document.createElement('section');
  allOfPro.appendChild(secEL);

  let tabEl = document.createElement('table');
  secEL.appendChild(tabEl);

  let trEl = document.createElement('tr');
  tabEl.appendChild(trEl);


  let thEl = document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent = this.city;


  for (let i = 0; i < this.sumOfTotal.length; i++) {
    let tdEl2 = document.createElement('td');
    trEl.appendChild(tdEl2);
    tdEl2.textContent = [this.sumOfTotal[i]];
  }
  let tdEl3 = document.createElement('td');
  tdEl3.textContent = this.coockesTotal;
  trEl.appendChild(tdEl3);
  cookiesArrTotal.push (this.coockesTotal)[0];
};


let seattle = new StoreLocation(23, 65, 'Seattle', 6.3, []);

let tokyo = new StoreLocation(3, 24, 'Tokyo', 1.2, []);

let dubai = new StoreLocation(11, 38, 'Dubai', 3.7, []);

let paris = new StoreLocation(20, 38, 'Paris', 2.3, []);

let lima = new StoreLocation(2, 16, 'Lima', 4.6, []);

let cityNew = [seattle, tokyo, dubai, paris, lima];

for (let i = 0; i < cityNew.length; i++) {
  cityNew[i].finalREsalt();
  cityNew[i].render();
}

function topTable() {
  let tobnew = document.getElementById('tableTop');

  let tableTop = document.createElement('table');
  tobnew.appendChild(tableTop);
  let trTop = document.createElement('tr');
  tableTop.appendChild(trTop);
  time.unshift('');
  time.push('Total of daily total');
  for (let i = 0; i < time.length; i++) {
    let th0El = document.createElement('th');
    trTop.appendChild(th0El);
    th0El.textContent = [time[i]];
  }
  time.shift();
  time.pop();
}

topTable();


function tableBottom() {
  let bottom = document.getElementById('tableBottom');

  let bottomElement = document.createElement('table');
  bottom.appendChild(bottomElement);
  let trBottom = document.createElement('tr');
  bottomElement.appendChild(trBottom);

  let totalEl = document.createElement('th');
  trBottom.appendChild(totalEl);
  totalEl.textContent = 'total';


  for(let i = 0; i < time.length; i++){
    let colomTotal = 0;
    for(let m = 0; m < arrayOfOpject.length; m++){
      colomTotal += arrayOfOpject[m].sumOfTotal[i];
    }
    let th2El = document.createElement('th');
    trBottom.appendChild(th2El);
    th2El.textContent = colomTotal;
  }

  let totalValu = cookiesArrTotal;
  let sumtotal = totalValu.reduce(function(sumation, valuejust)
  { return sumation + valuejust; }, 0);

  let finallTotal = document.createElement('th');
  trBottom.appendChild(finallTotal);
  finallTotal.textContent = sumtotal;
}

tableBottom();

