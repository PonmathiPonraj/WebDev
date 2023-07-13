//parentNode
var itemList = document.querySelector('#items');
itemList.parentNode.style.backgroundColor = '#f4f4f4';

//parentElement
itemList.parentElement.style.backgroundColor = '#f4f4f4';

//childNodes
console.log(itemList.childNodes);
itemList.children[1].style.backgroundColor = 'yellow';

//firstChild
console.log(itemList.firstChild);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

//lastChild
console.log(itemList.lastChild);

//lastElementChild
console.log(itemList.firstElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

//createElement

//Create a div
var newDiv = document.createElement('div');

//Add Class
newDiv.className = 'hello';

//Add Id
newDiv.id = 'hello 1';

//Add attr
newDiv.setAttribute('title', 'Hello Div');

//Create text node
var newDivTet = document.createTextNode('Hello World');

//Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);