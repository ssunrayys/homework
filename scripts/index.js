'use strict';

function createTable() {
  let tbl = document.createElement("table");
  let tblBody = document.createElement("tbody");
  tbl.style.border = "2px solid white";
  let n = 1;

  for (let i = 1; i <= 10; i++) {
    const row = document.createElement("tr");
    for (let k = 1; k <= 10; k++) {
      const cell = document.createElement("td");
	  cell.innerHTML = String(n++);
      cell.style.border = "1px solid white";
      row.appendChild(cell);
    }

    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  document.body.appendChild(tbl);
}

createTable()