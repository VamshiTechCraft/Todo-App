let todoInput = document.querySelector('.todo-input');
let addBtn = document.querySelector('button');
let todoList = document.querySelector('ul');
let taskcount = document.querySelector('.task-count');
let clearBtn = document.querySelector('.clear-btn');
let todoIndex = 0;
let errorBox = document.querySelector('.error-box');
 function addTask(){
  if(todoInput.value !== ''){
    let listItem = document.createElement('li');
    listItem.innerHTML += ` <div class="todo-info">
                          <input type="checkbox">
                          <p>${todoInput.value}</p>
                          </div>
                          <div class="trash-icon" onclick='deleteItem(this)'>
                          <i class="bx bxs-trash"></i>
                        </div>`;
    todoList?.appendChild(listItem);
    console.log(todoIndex);
    todoInput.value = '';
    listItem.scrollIntoView({ behavior: 'smooth' });
    let todoName = document.querySelector('p');
    let checkInput = document.querySelector('.checkbox');
    
  }
  else{
    alert('Please Add a Task...')
    
  }
 }
 addBtn?.addEventListener('click',()=>{
  addTask();
  saveTask();
 })
 function deleteItem(item){
  let itemInfo = item.parentNode;
  itemInfo.parentNode.removeChild(itemInfo);
  saveTask();
 }
 function saveTask(){
  localStorage.setItem('tasks',todoList.innerHTML);
}
function showTask(){
  todoList.innerHTML = localStorage.getItem('tasks');
}
showTask();

    
            