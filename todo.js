document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            return; // Don't add empty tasks
        }

        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const taskLabel = document.createElement('label');
        taskLabel.textContent = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        li.appendChild(checkbox);
        li.appendChild(taskLabel);
        li.appendChild(deleteButton);

        taskList.appendChild(li);

        deleteButton.addEventListener('click', function () {
            taskList.removeChild(li);
        });

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                taskLabel.classList.add('completed');
            } else {
                taskLabel.classList.remove('completed');
            }
        });

        taskInput.value = '';
    }
});
