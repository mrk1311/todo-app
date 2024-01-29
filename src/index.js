import './styles.css';
import { tabsDOM } from './functions/tabsDOM.js';

const main = document.querySelector('#main');

const tabsContainer = document.createElement('div');
tabsContainer.classList.add('tabs-container');

const tasksContainer = document.createElement('div');
tasksContainer.classList.add('tasks-container');

main.appendChild(tabsContainer);
main.appendChild(tasksContainer);

const localProjects = JSON.parse(localStorage.getItem('projects'));
console.log(localProjects)

tabsDOM.createTabs(tabsContainer, tasksContainer);
