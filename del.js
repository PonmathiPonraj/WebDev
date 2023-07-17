var form = document.getElementById('addform');
var itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit', addItem);
//Delete event 
itemList.addEventListener('click', removeItem);

//Add item 
function addItem(e) {
    e.preventDefault();
    //Get input value 
    var newItem = document.getElementById('item').value;
    //Create new li element 
    var li = document.createElement('li');
    //Add Class 
    li.className = 'list-group-item';
    //Add text node with input value 
    li.appendChild(document.createTextNode(newItem));
    //create delete button element 
    var deleteBtn = document.createElement('button');
    //Add classes to delete button 
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //Append button to li 
    li.appendChild(deleteBtn);
    //Append li to list
    itemList.appendChild(li);
}

//Remove Item 
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}