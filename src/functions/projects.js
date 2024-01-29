const { toDate, format, add } = require("date-fns");

export const projects = [
    {
        id: 1,
        name: 'Etap 1',
        tasks: [
            {
                id: 1,
                name: 'Dodaj input do przycisku +',
                description: 'w celu dodania nowego projektu',
                dueDate: '2024-11-24',
                formatedDate: format(toDate('2024-11-24'), 'EEEE, MMM do, yyyy'),
                priority: 'low',
                completed: true,
            },
            {
                id: 2,
                name: 'Dodaj przycisk usuwania zadania',
                description: 'w celu umożliwienia usunięcia zadania',
                dueDate: '2024-12-24',
                formatedDate: format(toDate('2024-12-24'), 'EEEE, MMM do, yyyy'),
                priority: 'medium',
                completed: true,
            },
            {
                id: 3,
                name: 'Zmień wygląd checkboxa i przycisków usuwania',
                description: 'żeby lepiej wyglądały',
                dueDate: '2024-01-24',
                formatedDate: format(toDate('2024-01-24'), 'EEEE, MMM do, yyyy'),
                priority: 'high',
                completed: false,
            },
            {
                id: 4,
                name: 'Dodaj możliwość zmiany priorytetu',
                description: 'w celu lepszego zarządzania zadaniami (w taskDetails)',
                dueDate: '2024-02-24',
                formatedDate: format(toDate('2024-02-24'), 'EEEE, MMM do, yyyy'),
                priority: 'low',
                completed: false,
            }
        ]
    },
    {
        id: 2,
        name: 'Etap 2',
        tasks: [
            {
                id: 1,
                name: 'Dodaj zapis do local storage',
                description: 'aby dane nie zniknęły po odświeżeniu strony',
                dueDate: '2020-11-24',
                formatedDate: format(toDate('2024-11-24'), 'EEEE, MMM do, yyyy'),
                priority: 'high',
                completed: false,
            },
            {
                id: 2,
                name: 'Dodaj tą bibliotekę z datami',
                description: 'w celu wyświetlania daty',
                dueDate: '2021-01-20',
                formatedDate: format(toDate('2021-01-20'), 'EEEE, MMM do, yyyy'),
                priority: 'low',
                completed: true,
            }
        ]
    }
];

if (!localStorage.getItem('projects')) {
    populateStorage();
    console.log('Storage populated');
} else {
    getStorage();
    console.log('Storage already populated');
}

function populateStorage() {
    localStorage.setItem('projects', JSON.stringify(projects));
}

function getStorage() {
    const projectsFromStorage = JSON.parse(localStorage.getItem('projects'));
    projectsFromStorage.forEach(project => {
        project.tasks.forEach(task => {
            addTask(project, task.name, task.description, task.dueDate, task.priority);
            console.log(task)
        });
    });
}


export function addProject(newProject) {
    projects.push(newProject);
}

export function editProject(project, newName) {
    project.name = newName;
}

export function deleteProject(projectToDelete) {
    const index = projects.indexOf(projectToDelete);
    projects.splice(index, 1);
}

export function addTask(project, newTaskName, newTaskDescription, newTaskDueDate, newTaskPriority) {
    const task = {
        id: project.tasks.length + 1,
        name: newTaskName,
        description: newTaskDescription,
        dueDate: newTaskDueDate,
        formatedDate: format(toDate(newTaskDueDate), 'EEEE, MMMM do, yyyy'),
        priority: newTaskPriority
    };
    project.tasks.push(task);
}

export function editTask(task, newName, newDescription, newDueDate, newPriority) {
    task.name = newName;
    task.description = newDescription;
    task.dueDate = newDueDate;
    task.formatedDate = format(toDate(newDueDate), 'EEEE, MMMM do, yyyy');
    task.priority = newPriority;
}

export function deleteTask(taskToDelete) {
    const project = projects.find(project => project.tasks.includes(taskToDelete));
    console.log(project)
    project.tasks.splice(project.tasks.indexOf(taskToDelete), 1);
    console.log(project.tasks)
}