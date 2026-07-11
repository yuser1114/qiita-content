import { createTask, deleteTask, toggleTask } from './taskManager.js';

const form = document.querySelector('#task-form');
const input = document.querySelector('#task-title');
const taskList = document.querySelector('#task-list');
const message = document.querySelector('#message');
let tasks = [];

function render() {
  taskList.replaceChildren(...tasks.map((task) => {
    const item = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => { tasks = toggleTask(tasks, task.id); render(); });
    const title = document.createElement('span');
    title.textContent = task.title;
    if (task.completed) title.classList.add('completed');
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = '削除';
    removeButton.addEventListener('click', () => { tasks = deleteTask(tasks, task.id); render(); });
    label.append(checkbox, title);
    item.append(label, removeButton);
    return item;
  }));
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  try {
    tasks = [...tasks, createTask(input.value)];
    input.value = '';
    message.textContent = '';
    render();
  } catch (error) {
    message.textContent = error.message;
  }
});
