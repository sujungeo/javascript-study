import './style.css';

let todos = [];

document.querySelector('#add-item').addEventListener('click', (event) => {
  document.querySelector('#container-dialog-add').setAttribute('class', 'dialog-backdrop display-flex');
})

document.querySelector('#button-add').addEventListener('click', (event) => {
  document.querySelector('#container-dialog-add').setAttribute('class', 'dialog-backdrop');

  const randomId = Math.random().toString(36).slice(2, 11);
  const todoLabel = document.querySelector('#todo-label');
  const todoContent = document.querySelector('#todo-content');

  todos.push({ id: randomId, label: todoLabel.value, content: todoContent.value });

  console.log(todos);
  todoRender();

  todoLabel.value = 'todo';
  todoContent.value = '';
})


function todoRender() {
  clearTodoList();

  todos.map((todo) => {
    const listEl = document.querySelector(`#${todo.label}`);
    const liEl = document.createElement('li');
    const textNode = document.createTextNode(todo.content);
    liEl.appendChild(textNode);
    listEl.append(liEl);
  });
}

function clearTodoList() {
  ['todo', 'doing', 'done'].map((label) => {
    const listEl = document.querySelector(`#${label}`);
    listEl.innerHTML = '';
  });
}
