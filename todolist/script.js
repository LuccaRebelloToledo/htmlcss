function createTask(){
    const task = document.getElementById('newTask').value;
    const newTask = document.createElement('li');
    newTask.innerHTML = `<input disabled type="text" value="${task}"><button onclick="updateTask(this)">Update</button><button onclick="deleteTask(this)">Delete</button><button onclick="endTask(this)">Done</button>`;
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
    doneTask.innerHTML = `<p class="done">${inputValue}</p>`;
    document.getElementById('doneList').appendChild(doneTask);
}