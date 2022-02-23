const body = document.body;
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);
body.appendChild(table)

let row_head = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Product";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Price";

row_head.appendChild(heading_1);
row_head.appendChild(heading_2);
thead.appendChild(row_head);

const list = [
  { name: 'apple', price: 30 },
  { name: 'tomato', price: 40 },
  { name: 'cucumber', price: 45 },
  { name: 'orange', price: 35 },
  { name: 'banana', price: 30}
]

list.forEach((value) => {
  let row = document.createElement('tr');
  let data1 = document.createElement('td');
  data1.innerHTML = value.name;
  let data2 = document.createElement('td');
  data2.innerHTML = value.price;

  row.appendChild(data1);
  row.appendChild(data2);
  tbody.appendChild(row);
})