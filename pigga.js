


const inputText = document.querySelector('#new-task');
const addTaskButton = document.querySelector('#add-task');
const taskList = document.querySelector('#task-list');


function addTask() {
    const taskText = inputText.value.trim();
    if (taskText === '') return;

    
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    
    taskItem.appendChild(deleteButton);

 
    taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    
    taskList.appendChild(taskItem);

    inputText.value = '';
}


addTaskButton.addEventListener('click', addTask);


inputText.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
