'use strict'

function randomNumber(min, max) {

   return Math.floor(Math.random() * (max - min + 1)) + min;


}

let globVar = document.getElementById('container');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let locationArr = [];

let table = document.createElement('table');

function headerRow() {
   let article = document.createElement('article')
   globVar.appendChild(article);
   article.appendChild(table);

   let headingRow = document.createElement('tr');
   table.appendChild(headingRow);


   let th1 = ' ';
   th1 = document.createElement('th');
   headingRow.appendChild(th1);
   for (let i = 0; i < hours.length; i++) {
      th1 = document.createElement('th');
      headingRow.appendChild(th1);
      th1.textContent = `${hours[i]}`;
      //   console.log(thElement);
   };
   th1.textContent = 'Daily location total';
}

function footerRow() {
   let lastRow = document.createElement('tr');
   table.appendChild(lastRow);

   let totaData = document.createElement('td');
   lastRow.appendChild(totaData);

   totaData.textContent = 'Total';

   for (let j = 0; j < 13; j++) {
      let tdL = document.createElement('td');
      let totalB = 0;
      for (let x = 0; x < locationArr.length; x++) {
         totalB += locationArr[x].randomHoursArray[j];
      }
      tdL.textContent = totalB;
      lastRow.appendChild(tdL);
   }
   let totalLastCell = 0;
   for (let y = 0; y < locationArr.length; y++) {
      totalLastCell += locationArr[y].total;
   }
   let totaData1 = document.createElement('td');
   lastRow.appendChild(totaData1);
   totaData1.textContent = totalLastCell;

}
// let seattle ={

//     countryName:'seattle',
//     minMaxcustomer :0 ,
//     randomHoursArray:[],
//     avg : 6.3,
//     total:0,
//   custperhour: function () {
//      let sum =0;
//      for (let i = 0; i < hours.length; i++) {

//      this.minMaxcustomer = randomNumber(23,65);

//      sum = this.minMaxcustomer * this.avg;
//      let calc = Math.floor(sum);
//      this.randomHoursArray.push(calc);
//      this.total+= calc;

//       }

//    },
function Location(countryName, min, max, avg, total, randomHoursArray) {

   this.userName = countryName;
   this.min = min;
   this.max = max;
   this.avg = avg;
   this.randomHoursArray = randomHoursArray;
   this.total = total
   locationArr.push(this);

}

Location.prototype.custperhour = function () {

   let sum = 0;
   for (let i = 0; i < hours.length; i++) {

      sum = randomNumber(this.min, this.max) * this.avg;
      let calc = Math.floor(sum);
      this.randomHoursArray.push(calc);
      this.total += calc;

   }

}

Location.prototype.renderA = function () {
   let secondRow = document.createElement('tr');
   table.appendChild(secondRow);
   let datatable = document.createElement('td');
   secondRow.appendChild(datatable);
   datatable.textContent = this.userName;
   let td2 = ' ';
   for (let x = 0; x < hours.length; x++) {
      td2 = document.createElement('td');
      secondRow.appendChild(td2)
      td2.textContent = `${this.randomHoursArray[x]}`;

   }
   td2.textContent = this.total;

}
let Seattle = new Location('Seattle', 23, 65, 6.3, 0, []);

let Tokyo = new Location('Tokyo', 3, 24, 1.2, 0, []);

let Dubai = new Location('Dubai', 11, 38, 3.7, 0, []);

let Paris = new Location('Paris', 20, 38, 2.3, 0, []);

let Lima = new Location('Lima', 2, 16, 4.6, 0, []);



headerRow();

for (let i = 0; i < locationArr.length; i++) {
   locationArr[i].custperhour();
   locationArr[i].renderA();
}

footerRow();


//  liAndul : function(){ 
//  let ulElement= document.createElement('ul');

//   globVar.appendChild (ulElement);

//  let liElement = null;
//  for (let x = 0; x < hours.length; x++) {
//     liElement= document.createElement('li');
//     ulElement.appendChild(liElement);
//     liElement.textContent= `${hours[x]} ${this.randomHoursArray[x]} cookies`;
//  }

//  let liElement2 = document.createElement('li');
//  ulElement.appendChild(liElement2);
//  liElement2.textContent = `The total is :${this.total}`;

//  }

// }

// seattle.custperhour();
// seattle.liAndul();





// // Tokyo



// let Tokyo={

//     countryName:'Tokyo',
//     minMaxcustomer :0 ,
//     randomHoursArray:[],
//     avg : 1.2,
//     total:0,
//   custperhour: function () {
//      let sum =0;
//      for (let i = 0; i < hours.length; i++) {

//      this.minMaxcustomer = randomNumber(3,24);

//      sum = this.minMaxcustomer * this.avg;
//      let calc = Math.floor(sum);
//      this.randomHoursArray.push(calc);
//      this.total+= calc;

//       }

//    },






//  liAndul : function(){ 
//  let ulElement= document.createElement('ul');

//   globVar.appendChild (ulElement);

//  let liElement = null;
//  for (let x = 0; x < hours.length; x++) {
//     liElement= document.createElement('li');
//     ulElement.appendChild(liElement);
//     liElement.textContent= `${hours[x]} ${this.randomHoursArray[x]} cookies`;
//  }

//  let liElement2 = document.createElement('li');
//  ulElement.appendChild(liElement2);
//  liElement2.textContent = `The total is :${this.total}`;

//  }

// }

// Tokyo.custperhour();
// Tokyo.liAndul();



// // Dubai

// let Dubai={

//     countryName:'Dubai',
//     minMaxcustomer :0 ,
//     randomHoursArray:[],
//     avg : 3.7,
//     total:0,
//   custperhour: function () {
//      let sum =0;
//      for (let i = 0; i < hours.length; i++) {

//      this.minMaxcustomer = randomNumber(11,38);

//      sum = this.minMaxcustomer * this.avg;
//      let calc = Math.floor(sum);
//      this.randomHoursArray.push(calc);
//      this.total+= calc;

//       }

//    },






//  liAndul : function(){ 
//  let ulElement= document.createElement('ul');

//   globVar.appendChild (ulElement);

//  let liElement = null;
//  for (let x = 0; x < hours.length; x++) {
//     liElement= document.createElement('li');
//     ulElement.appendChild(liElement);
//     liElement.textContent= `${hours[x]} ${this.randomHoursArray[x]} cookies`;
//  }

//  let liElement2 = document.createElement('li');
//  ulElement.appendChild(liElement2);
//  liElement2.textContent = `The total is :${this.total}`;

//  }

// }

// Dubai.custperhour();
// Dubai.liAndul();


// // Paris

// let Paris={

//     countryName:'Paris',
//     minMaxcustomer :0 ,
//     randomHoursArray:[],
//     avg : 2.3,
//     total:0,
//   custperhour: function () {
//      let sum =0;
//      for (let i = 0; i < hours.length; i++) {

//      this.minMaxcustomer = randomNumber(20,38);

//      sum = this.minMaxcustomer * this.avg;
//      let calc = Math.floor(sum);
//      this.randomHoursArray.push(calc);
//      this.total+= calc;

//       }

//    },






//  liAndul : function(){ 
//  let ulElement= document.createElement('ul');

//   globVar.appendChild (ulElement);

//  let liElement = null;
//  for (let x = 0; x < hours.length; x++) {
//     liElement= document.createElement('li');
//     ulElement.appendChild(liElement);
//     liElement.textContent= `${hours[x]} ${this.randomHoursArray[x]} cookies`;
//  }

//  let liElement2 = document.createElement('li');
//  ulElement.appendChild(liElement2);
//  liElement2.textContent = `The total is :${this.total}`;

//  }

// }

// Paris.custperhour();
// Paris.liAndul();


// //Lima

// let Lima={

//     countryName:'Lima',
//     minMaxcustomer :0 ,
//     randomHoursArray:[],
//     avg : 4.6,
//     total:0,
//   custperhour: function () {
//      let sum =0;
//      for (let i = 0; i < hours.length; i++) {

//      this.minMaxcustomer = randomNumber(2,16);

//      sum = this.minMaxcustomer * this.avg;
//      let calc = Math.floor(sum);
//      this.randomHoursArray.push(calc);
//      this.total+= calc;

//       }

//    },






//  liAndul : function(){ 
//  let ulElement= document.createElement('ul');

//   globVar.appendChild (ulElement);

//  let liElement = null;
//  for (let x = 0; x < hours.length; x++) {
//     liElement= document.createElement('li');
//     ulElement.appendChild(liElement);
//     liElement.textContent= `${hours[x]} ${this.randomHoursArray[x]} cookies`;
//  }

//  let liElement2 = document.createElement('li');
//  ulElement.appendChild(liElement2);
//  liElement2.textContent = `The total is :${this.total}`;

//  }

// }

// Lima.custperhour();
// Lima.liAndul();