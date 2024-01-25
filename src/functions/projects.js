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
                priority: 'low',
                completed: true,
            },
            {
                id: 2,
                name: 'Dodaj przycisk usuwania zadania',
                description: 'w celu umożliwienia usunięcia zadania',
                dueDate: '2024-12-24',
                priority: 'medium',
                completed: true,
            },
            {
                id: 3,
                name: 'Zmień wygląd checkboxa i przycisków usuwania',
                description: 'żeby lepiej wyglądały',
                dueDate: '2024-01-24',
                priority: 'high',
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
                priority: 'high',
                completed: false,
            },
            {
                id: 2,
                name: 'Dodaj tą bibliotekę z datami',
                description: 'w celu wyświetlania daty',
                dueDate: '2021-01-20',
                priority: 'low',
                completed: false,
            }
        ]
    }
];

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
        priority: newTaskPriority
    };
    project.tasks.push(task);
}

export function editTask(task, newName, newDescription, newDueDate, newPriority) {
    task.name = newName;
    task.description = newDescription;
    task.dueDate = newDueDate;
    task.priority = newPriority;
}

export function deleteTask(taskToDelete) {
    const project = projects.find(project => project.tasks.includes(taskToDelete));
    console.log(project)
    project.tasks.splice(project.tasks.indexOf(taskToDelete), 1);
    console.log(project.tasks)
}