// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select the input, button, and list elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Check if task input is empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create the list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn'); // <- This is the correct way to add the class

        // Remove the task when the button is clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remove button and add the list item to the list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input
        taskInput.value = '';
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on "Enter" keypress
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
