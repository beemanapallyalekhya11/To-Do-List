const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const clearCompletedBtn = document.getElementById('clear-completed');
const clearAllBtn = document.getElementById('clear-all');
const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');

// Add Task
function createTask(text) {
  const li = document.createElement('li');

  const checkbox = document.createElement('div');
  checkbox.className = 'checkbox';
  checkbox.addEventListener('click', () => {
    li.classList.toggle('checked');
  });

  const taskText = document.createElement('span');
  taskText.textContent = text;
  taskText.style.flex = "1";
  taskText.style.marginLeft = "10px";

  const deleteBtn = document.createElement('span');
  deleteBtn.textContent = '×';
  deleteBtn.addEventListener('click', () => li.remove());

  li.appendChild(checkbox);
  li.appendChild(taskText);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
}

// Handle Add
addBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task !== '') {
    createTask(task);
    taskInput.value = '';
  }
});

// Bulk: Clear Completed
clearCompletedBtn.addEventListener('click', () => {
  const items = document.querySelectorAll('li.checked');
  items.forEach(item => item.remove());
});

// Bulk: Clear All
clearAllBtn.addEventListener('click', () => {
  taskList.innerHTML = '';
});

// Theme Toggle
themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('light');
  themeLabel.textContent = themeToggle.checked ? 'Light' : 'Dark';
});
