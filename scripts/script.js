'use strict';

let tBody = document.body.querySelector('#grid tbody');
let tRows = tBody.rows;
let rowsArray = [];

for(let i = 0; i < tRows.length; i++) {
  rowsArray.push(tRows[i]);
}


grid.addEventListener('click', function(event) {
  let aim = event.target;

  switch (aim.dataset.type) {
    case 'string': rowsArray.sort(function (name1, name2) {
        let firstN = name1.children[1].innerHTML.toLowerCase();
        let secondN = name2.children[1].innerHTML.toLowerCase();
        if(firstN > secondN) {
          return 1;
        }
        if(firstN < secondN) {
          return -1;
        }
      });
      break;
    case 'number':
      rowsArray.sort(function (num1, num2) {
         return num1.children[0].innerHTML - num2.children[0].innerHTML;
      });
      break;
  };

  for (let i = 0; i < rowsArray.length; i++) {
    tBody.appendChild(rowsArray[i]);
  }
});