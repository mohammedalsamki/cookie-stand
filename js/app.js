'use strict';



const cityName = [];

const time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const allOfTotall = new Array(time.length + 1).fill(0);

//Constructor Function:

function CookiesInfo(city, minPH, maxPH, avgCookeiPH) {
  this.city = city;
  this.minPH = minPH;
  this.maxPH = maxPH;
  this.avgCookeiPH = avgCookeiPH;
  this.dailyTotal = 0;
  this.cookiPH = [];
  this.SoldCookesPH();
  this.allOfTotallcall();
  cityName.push(this);
}

CookiesInfo.prototype.allOfTotallcall = function () {
  for (let i = 0; i < this.cookiPH.length; i++) {
    allOfTotall[i] += this.cookiPH[i];
    allOfTotall[allOfTotall.length - 1] += this.cookiPH[i];
  }
};

CookiesInfo.prototype.ranCustPH = function () {
  for (let i = 0; i < time.length; i++) {
    return Math.floor(Math.random() * (this.maxPH - this.minPH + 1) + this.minPH);
  }
};


CookiesInfo.prototype.SoldCookesPH = function () {
  for (let i = 0; i < time.length; i++) {
    let houCookies = Math.ceil(this.ranCustPH() * this.avgCookeiPH);
    // console.log(hourlyCookies);
    this.cookiPH.push(houCookies);
    this.dailyTotal += houCookies;
  }
  // console.log(this.dailySoldTotal);
};


const cityName =[];

const time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const allOfTotall = new Array(time.length +1 ).fill(0);

function CookiesInfo(city,minPH,maxPH,avgCoo,avgCookeiPH);{
this.city=city;
this.minPH=minPH;
this.maxPH=maxPH
this.avgCookeiPH = avgCookeiPH;
this.dailyTotal=0;
this.cookiPH=[];
this.eachHourCookie();
this.allOfTotall();
cityName.push(this);


}
CookiesInfo.prototype.allOfTotall = function(){
   for (let i = 0 ; i< this.cookiPH.length;i++){
      allOfTotall[i] += this.cookiPH[i];
      allOfTotall[allOfTotall.length -1 ] += this.cookiPH[i];

   }
}
CookiesInfo.prototype.ranCustPH = function (){
for (let i = 0; i<time.length;i++){

   return Math.floor(Math.random()*(rhis.maxPH - this.minPH +1) + this.minPH);
   }

};
CookiesInfo.prototype.SoldCookesPH=function(){
   for (let i=0;i<time; i++){
      let houCookies = Math.city(this,this.ranCustPH() * this.avgCookeiPH);
this.cookiPH.push(houCookies);
this.dailyTotal += houCookies;
   }
};



new CookiesInfo('Seattle', 23, 65, 6.3);
new CookiesInfo('Tokyo', 3, 24, 1.2);
new CookiesInfo('Dubai', 11, 38, 3.7);
new CookiesInfo('Paris', 20, 38, 2.3);
new CookiesInfo('Lima', 2, 16, 4.6);

let renderRow = function () {

  let trEl = document.getElementById('row');
  // console.log(trElement);
  let thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);
  for (let i = 0; i < time.length; i++) {
    let tdEl = document.createElement('td');
    tdEl.textContent = time[i];
    trEl.appendChild(tdEl);
  }
  let tdEl = document.createElement('td');
  tdEl.textContent = 'Total';
  trEl.appendChild(tdEl);
};

renderRow();


let renderDataRow = function () {
  let divcont = document.getElementById('body');
  for (let i = 0; i < cityName.length; i++) {
    let trEl = document.createElement('tr');
    let thEl = document.createElement('th');
    thEl.textContent = cityName[i].city;
    trEl.appendChild(thEl);
    for (let j = 0; j < cityName[i].cookiPH.length; j++) {
      let tdEl = document.createElement('td');
      tdEl.textContent = cityName[i].cookiPH[j];
      trEl.appendChild(tdEl);
    }
    let tdEl = document.createElement('td');
    tdEl.textContent = cityName[i].dailyTotal;
    trEl.appendChild(tdEl);
    divcont.appendChild(trEl);
  }
};

renderDataRow();


let renderFooterRow = function () {
  let foot = document.getElementById('foot-row');
  let thEl = document.createElement('th');
  thEl.textContent = 'Grand Total';
  foot.appendChild(thEl);
  // console.log(grandTotals);
  for (let i = 0; i < allOfTotall.length; i++) {
    let tdEl = document.createElement('td');
    tdEl.textContent = allOfTotall[i];
    foot.appendChild(tdEl);
  }
};

renderFooterRow();

let trEl = document.getElementById('container');
let thEl = document.createElement('th');
trEl.appendChild(thEl);


}

