var form = document.getElementById('addform');
var item = document.getElementById('items');
var itemList = document.getElementsByClassName('list-group-item');
var filter = document.getElementById('filter');
//form submit event
form.addEventListener('submit', onDelete);
//Delete event 
itemList.addEventListener('click', onSubmit);
// Filter event
filter.addEventListener('keyup', filterItems);

//Adding edit button to all list item 
for (let i = 0; i < itemList.length; i++) {
    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-sm float-right editBtn';
    editBtn.appendChild(document.createTextNode('EDIT'));
    itemList[i].appendChild(editBtn);
}

//Add item 
function onSubmit(e) {
    e.preventDefault();
    //Get input value 
    var newItem = document.getElementById('item').value;
    var newItem = document.getElementById('description').value;
    //Create new li element 
    const li = document.createElement('li');
    //Add Class 
    li.className = 'list-group-item';
    //Add text node with input value 
    const newText = document.createTextNode(inputValue);
    const descriptionNode = document.createTextNode(" " + description);
    li.appendChild(newText);
    li.appendChild(descriptionNode);
    //create delete button element 
    var deleteBtn = document.createElement('button');
    //Add classes to delete button 
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //Append button to li 
    li.appendChild(deleteBtn);

    //Adding edit button 
    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-sm float-right editBtn';
    editBtn.appendChild(document.createTextNode('EDIT'));
    //Append button to li 
    li.appendChild(editBtn);
    //Append li to list
    itemList.appendChild(li);
}

//Remove Item 
function onDelete(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you Sure?')) {
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get list
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}