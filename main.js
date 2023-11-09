const todoTitle = document.querySelector('todoTitle')
const todoDate = document.querySelector('todoDateInp')
const todoBtn = document.querySelector('addTodoBtn')
const display = document.querySelector('todoDisplay')
const form = document.querySelector('form')

const array = [];

todoBtn.addEventListener('click', function(e){
    e.preventDefault();

    const todo ={
        todoName: todoTitle.value,
        todoDate: todoDate.value
    },
    const li = document.createElement('li');
    li.innerHTML = `Nazwa: ${todoName} Data: ${todoDate}`;
    
    array.push(todo);
})