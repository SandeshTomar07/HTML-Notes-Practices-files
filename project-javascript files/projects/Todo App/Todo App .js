let todoList = [
  {
    item: 'buy Milk',
    dueDate: '4/10/2023',
  },
  {
    item: 'Go to collage',
    dueDate: '4/10/2023',
  }
];

displayItems();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = inputElement.value;
  todoList.push({item: todoItem, dueDate: todoDate});
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container ');
  let newhtml = '';
  for (let i = 0; i < todoList.length; i++) {
    let {item, dueDate} = todoList[i];
    newhtml += `
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="btn-delete" onclick="todoList.splice(${i}), 1;
    displayItems();">Delete</button>
    `;
  }
  containerElement.innerHTML = newhtml;
}