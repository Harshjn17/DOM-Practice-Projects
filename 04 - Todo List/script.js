let input = document.querySelector('#input');
let addBtn = document.querySelector('#addBtn');
let todoListContainer = document.querySelector('.todo-list');

let todoList = [];

addBtn.addEventListener('click', ()=>{
  // Get input Value
  let inputVal = input.value.trim();
  
  // Prevent empty
  if(inputVal === "") return;
  
  // Push
  todoList.push({
    title: inputVal,
    completed: false
  });
  
  createTodo();
  
  // Clear text
  input.value = "";
});

function createTodo(){
  todoListContainer.innerHTML = "";
  todoList.forEach((todo, index) => {
    // Create to-do list
    let li = document.createElement('li');
    
    let span = document.createElement('span');
    span.textContent = todo.title;
    
    if (todo.completed) {
      span.classList.add('complete');
    }
    
    let deleteBtn= document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.textContent = '✖';
    
    // Delete button
    deleteBtn.addEventListener('click', ()=>{
      todoList.splice(index,1);
      createTodo();
    });
    
    // Completed btn
    span.addEventListener('click', () =>{
      if(todoList[index].completed === true){
        todoList[index].completed = false;
      } else todoList[index].completed = true;
      
      createTodo();
    });
    
    // Append
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoListContainer.appendChild(li);
  });
}