// Task 3
var headerTitle = document.getElementById('header-title');
headerTitle.style.borderBottom = 'solid 3px #000';
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 4px #000';
var items = document.getElementsByClassName('list-group-item');
items[0].textContent = 'Pons';
items[0].style.fontWeight = 'bold';
items[0].style.color = 'green';

//Task 4
items[2].style.backgroundColor = 'green';
for (i = 0; i < items.length; i++) {
    items[i].style.fontWeight = 'bold';
}

//Task 5
var li = document.getElementsByTagName('li');
li[4].textContent = 'Hello';
li[4].style.fontWeight = 'bold';
li[4].style.color = 'red';