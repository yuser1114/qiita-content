import { createTask, deleteTask, filterTasksByPriority, toggleTask } from './taskManager.js';

const form = document.querySelector('#task-form');
const input = document.querySelector('#task-title');
const priorityInput = document.querySelector('#task-priority');
const priorityFilter = document.querySelector('#priority-filter');
const taskList = document.querySelector('#task-list');
const message = document.querySelector('#message');
let tasks = [];

function render() {
  const visibleTasks = filterTasksByPriority(tasks, priorityFilter.value);
  taskList.replaceChildren(...visibleTasks.map((task) => {
    const item = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => { tasks = toggleTask(tasks, task.id); render(); });
    const title = document.createElement('span');
    title.textContent = task.title;
    if (task.completed) title.classList.add('completed');
    const priority = document.createElement('span');
    priority.className = `priority priority-${task.priority}`;
    priority.textContent = task.priority;
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = '削除';
    removeButton.addEventListener('click', () => { tasks = deleteTask(tasks, task.id); render(); });
    label.append(checkbox, title, priority);
    item.append(label, removeButton);
    return item;
  }));
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  try {
    tasks = [...tasks, createTask(input.value, priorityInput.value)];
    input.value = '';
    message.textContent = '';
    render();
  } catch (error) {
    message.textContent = error.message;
  }
});

priorityFilter.addEventListener('change', render);
