// import { tasks } from './storage.js';
import { renderTasks } from './list/renderer.js';
import { onToggleTask } from './list/updateTask.js';
import { onCreateTask } from './list/createTask.js';
// import './index.scss';


const listElem = document.querySelector('.list');

renderTasks();

listElem.addEventListener('click', onToggleTask);

const createBtnElem = document.querySelector('.create-task-btn');
createBtnElem.addEventListener('click', onCreateTask);


const onStorageCase = e => {
    if (e.key === 'tasksList') {
        renderTasks();
    }
}

window.addEventListener('storage', onStorageCase);