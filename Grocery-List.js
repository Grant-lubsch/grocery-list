//Add items container
const addItemsAction = document.querySelector('.addItems-action');
const input = document.querySelector('.addItems-input');
const submit = document.querySelector('.addItems-submit');

//Display items container
const list = document.querySelector('.grocery-list');
const displayItemsAction = document.querySelector('.displayItems-action');
const clear = document.querySelector('.displayItems-clear');

//Add event listeners
//Add submit listeners
submit.addEventListener('click', addItem);
//check for local localStorage
document.addEventListener('DOMContentLoaded', displayStorage);
//Clear list
clear.addEventListener('click', removeItems);
//delete individual Items
list.addEventListener('click', removeSingleItem);

//functions
function addItem(event) {
  event.preventDefault();
  let value = input.value;
  if (value === ''){
    showAction(addItemsAction, 'Please add grocery item', false);
  } else {
    showAction(addItemsAction, '${value} added to the list', true);
    createItem(value);
    updateStorage(value);
  }
}

function showAction(element, text, value) {
  if (value === true) {
    element.classList.add('success');
    element.innerText = text;
    input.value = '';
    setTimeout(function(){
      element.classList.remove('success');
    }, 3000)
  } else {
    element.classList.add('alert');
    element.innerText = text;
    input.value = '';
    setTimeout(function(){
      element.classList.remove('alert');
    }, 3000)
  }
}

//update storage
function updateStorage(value){
    let groceryList;

    groceryList = localStorage.getItem('groceryList') ? JSON.parse(localStorage.getItem('groceryList')) : [];

    groceryList.push(value);
    localStorage.setItem('groceryList', JSON.stringify(groceryList));
}
