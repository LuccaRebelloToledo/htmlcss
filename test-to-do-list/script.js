document.getElementById('taskFilter').addEventListener('change', function() {
    const filter = this.value;
    const tasks = document.getElementById('toDoList').getElementsByTagName('li');

    for (let i = 0; i < tasks.length; i++) {
        let input = tasks[i].getElementsByTagName('input')[0];
        if (filter === 'all') {
            tasks[i].style.display = '';
        } else if (filter === 'pending' && input && input.classList.contains('finished')) {
            tasks[i].style.display = 'none';
        } else if (filter === 'finished' && (!input || !input.classList.contains('finished'))) {
            tasks[i].style.display = 'none';
        } else {
            tasks[i].style.display = '';
        }
    }
});

function createTask(){
    const task = document.getElementById('newTask').value;
    const newTask = document.createElement('li');
    newTask.innerHTML = `<input class="task" disabled type="text" value="${task}"><button onclick="updateTask(this)">Update</button><button onclick="deleteTask(this)">Delete</button><button onclick="endTask(this)">Done</button>`;
    document.getElementById('toDoList').appendChild(newTask);
    document.getElementById('newTask').value = '';
}

function updateTask(buttonElement){
    const listItem = buttonElement.parentElement;
    const inputElement = listItem.querySelector('input');
    inputElement.removeAttribute('disabled');

    inputElement.addEventListener('blur', function () {
        const newTask = inputElement.value;
        inputElement.value = newTask;
        inputElement.setAttribute('disabled', 'disabled');
    });
}

function deleteTask(buttonElement){
    const listItem = buttonElement.parentElement;
    listItem.remove();
}

function endTask(buttonElement){
    const listItem = buttonElement.parentElement;
    const inputElement = listItem.querySelector('input');
    const inputValue = inputElement.value;
    deleteTask(buttonElement);

    const doneTask = document.createElement('li');
    doneTask.innerHTML = `<input type="text" class="finished" disabled value="${inputValue}">`;
    document.getElementById('toDoList').appendChild(doneTask);
}

function clearFinishedTasks() {
    const toDoList = document.getElementById('toDoList');
    const tasks = toDoList.getElementsByTagName('li');

    for (let i = 0; i < tasks.length; i++) {
        const p = tasks[i].getElementsByTagName('input')[0];
        if (p && p.classList.contains('finished')) {
            tasks[i].remove();
            i--;
        }
    }
}
