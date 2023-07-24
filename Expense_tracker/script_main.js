function saveToLocalStorage(event) {
    event.preventDefault();
    const amount = event.target.amount.value;
    const des = event.target.description.value;
    const obj = {
        amount,
        des
    };
    localStorage.setItem(obj.description, JSON.stringify(obj));
    showUserOnScreen(obj);
}

function showUserOnScreen(obj) {
    let parentElement = document.getElementById('listOfExpenses');
    let childElement = document.createElement('li');
    childElement.textContent = obj.amount + '-' + obj.des;
    var deleteButton = document.createElement('input');
    deleteButton.type = "button";
    deleteButton.value = "Delete Expense";
    deleteButton.onclick = () => {
        parentElement.removeChild(childElement);
        localStorage.removeItem(obj.amount);
    };
    //EDIT BUTTON
    var editButton = document.createElement('input');
    editButton.type = 'button';
    editButton.value = 'Edit Expense';
    editButton.onclick = () => {
        parentElement.removeChild(childElement);
        localStorage.removeItem(obj.des);
        document.getElementById(amount).value = obj.amount;
        document.getElementById(description).value = obj.des;
    }
    childElement.appendChild(editButton)
    childElement.appendChild(deleteButton);
    parentElement.appendChild(childElement);

}
window.onbeforeunload = function() {
    localStorage.setItem("amount", $('#inputAmount').val());
    localStorage.setItem("description", $('#inputDescription').val());
    localStorage.setItem("category", $('#inputcategory').val());

}
window.onload = function() {
    var amount = localStorage.getItem("amount");
    if (amount !== null) $('#inputAmount').val("amuont");
}