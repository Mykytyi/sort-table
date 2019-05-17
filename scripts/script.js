'use strict';

let tBody = document.body.querySelector('#grid tbody');
let tRows = tBody.rows;
let rowsArray = [];

for(let i = 0; i < tRows.length; i++) {
  rowsArray.push(tRows[i]);
}


grid.onclick = function(event) {
  let aim = event.target;
  if (aim.dataset.type === 'string') {
  } else if (aim.dataset.type === 'number') {
      rowsArray.sort(function (num1, num2) {
        return num1.firstElementChild.innerHTML - num2.firstElementChild.innerHTML;
      });
  }

  grid.removeChild(tBody);

  for (let i = 0; i < rowsArray.length; i++) {
    tBody.appendChild(rowsArray[i]);
  }

  grid.appendChild(tBody);
};
