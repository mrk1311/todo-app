const { toDate, format, add } = require("date-fns");

const localProjects = JSON.parse(localStorage.getItem('projects'));

export const todayTasks = [];

export const projects = [
    // {
    //     id: 0,
    //     name: 'Today',
    //     tasks: todayTasks,
    // },
    {
        id: 1,
        name: 'Etap 1',
        tasks: [
            {
                id: 1,
                name: 'Dodaj input do przycisku +',
                description: 'w celu dodania nowego projektu',
                dueDate: '2024-01-30',
                formatedDate: format(toDate('2024-01-30'), 'EEEE, MMM do, yyyy'),
                priority: 'low',
                completed: true,
            },
            {
                id: 2,
                name: 'Dodaj przycisk usuwania zadania',
                description: 'w celu umożliwienia usunięcia zadania',
                dueDate: '2024-01-30',
                formatedDate: format(toDate('2024-01-30'), 'EEEE, MMM do, yyyy'),
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
                completed: true,
            },
            {
                id: 4,
                name: 'Dodaj możliwość zmiany priorytetu',
                description: 'w celu lepszego zarządzania zadaniami (w taskDetails)',
                dueDate: '2024-02-24',
                formatedDate: format(toDate('2024-02-24'), 'EEEE, MMM do, yyyy'),
                priority: 'low',
                completed: true,
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
                completed: true,
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
    projects.length = 0;
    localProjects.forEach(project => {
        projects.push(project);
    });
}

function updateStorage() {
    localStorage.clear();
    localStorage.setItem('projects', JSON.stringify(projects));
}


export function addProject(newProject) {
    projects.push(newProject);
    updateStorage();
}

export function editProject(project, newName) {
    project.name = newName;
    updateStorage();
}

export function deleteProject(projectToDelete) {
    const index = projects.indexOf(projectToDelete);
    projects.splice(index, 1);
    localProjects.splice(index, 1);
    updateStorage();
}

export function addTask(project, newTaskName, newTaskDescription, newTaskDueDate, newTaskPriority, newStatus) {
    const task = {
        id: project.tasks.length + 1,
        name: newTaskName,
        description: newTaskDescription,
        dueDate: newTaskDueDate,
        formatedDate: format(toDate(newTaskDueDate), 'EEEE, MMMM do, yyyy'),
        priority: newTaskPriority,
        completed: newStatus,
    };
    project.tasks.push(task);
    updateStorage();
}

export function editTask(task, newName, newDescription, newDueDate, newPriority) {
    task.name = newName;
    task.description = newDescription;
    task.dueDate = newDueDate;
    task.formatedDate = format(toDate(newDueDate), 'EEEE, MMMM do, yyyy');
    task.priority = newPriority;
    updateStorage();
}

export function deleteTask(taskToDelete) {
    const project = projects.find(project => project.tasks.includes(taskToDelete));
    project.tasks.splice(project.tasks.indexOf(taskToDelete), 1);
    updateStorage();
}

export function getTodayTasks() {

    todayTasks.length = 0;
    projects.forEach(project => {
        project.tasks.forEach(task => {
            console.log(format(new Date(), 'yyyy-MM-dd'));
            if (task.dueDate === format(new Date(), 'yyyy-MM-dd')) {
                todayTasks.push(task);
                console.log('task added')
            }
        });
    });
    return todayTasks;
}