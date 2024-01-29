import './styles.css';
import { tabsDOM } from './functions/tabsDOM.js';

const main = document.querySelector('#main');

const logo = document.createElement('div');
logo.classList.add('logo');
logo.textContent = 'Todo App';

const tabsContainer = document.createElement('div');
tabsContainer.classList.add('tabs-container');

const tasksContainer = document.createElement('div');
tasksContainer.classList.add('tasks-container');

main.appendChild(tabsContainer);
main.appendChild(tasksContainer);

const localProjects = JSON.parse(localStorage.getItem('projects'));
console.log(localProjects)

tabsDOM.createTabs(tabsContainer, tasksContainer);

const info = document.createElement('div');
info.classList.add('info');
info.textContent = 'Click task to show description. Double click on a name, date or description to edit it';

main.appendChild(logo);
main.appendChild(info);