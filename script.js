document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    let savedTasks = [];

    function loadTasks() {
        savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        savedTasks.forEach(taskText => createTaskElement(taskText));
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        createTaskElement(taskText);
        savedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(savedTasks));

        taskInput.value = '';
    }

    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        removeBtn.onclick = function () {
            taskList.removeChild(li);
            const index = savedTasks.indexOf(taskText);
            if (index !== -1) {
                savedTasks.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(savedTasks));
            }
        };
        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    loadTasks();
});