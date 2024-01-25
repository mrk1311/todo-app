import { addTask, editTask, deleteTask } from "./projects";

export const tasksDOM = (() => {


    const getPriorityColor = (priority) => {
        
        switch (priority) {
            case "high":
                return "red";
            case "medium":
                return "orange";
            case "low":
                return "green";
            default:
                return "black";
        }
    };

    const createTaskElement = (task) => {

        const taskElement = document.createElement("div");
        taskElement.classList.add("task-element");

        const taskMain = document.createElement("div");
        taskMain.classList.add("task-main");

        taskMain.addEventListener("click", () => {
            taskDetails.style.display = taskDetails.style.display === "none" ? "flex" : "none";
        });

        const taskDetails = document.createElement("div");
        taskDetails.classList.add("task-details");
        taskDetails.style.display = "none";

        const priorityColor = getPriorityColor(task.priority);
        taskMain.style.backgroundColor = priorityColor;

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.classList.add("task-checkbox");
        checkbox.checked = task.completed;
        checkbox.addEventListener("click", (e) => {
            e.stopPropagation();
        });
        if (task.completed) {
            taskMain.classList.add("completed");
            taskMain.style.backgroundColor = "grey";
        } 
        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;
            if (task.completed) {
                taskMain.classList.add("completed");
                taskMain.style.backgroundColor = "grey";
            } else {
                taskMain.classList.remove("completed");
                taskMain.style.backgroundColor = priorityColor;
            }
        });
        
        const taskName = document.createElement("span");
        taskName.textContent = task.name;

        const nameForm = document.createElement("form");
        nameForm.style.display = "none";
        nameForm.addEventListener("submit", (event) => {
            event.preventDefault();
    
            const newName = nameInput.value;
            if (newName) {
                task.name = newName;
                editTask(task, newName, task.description, task.dueDate, task.priority);
                taskName.textContent = newName;
            }



            nameForm.style.display = "none";
            nameInput.style.display = "none";
            taskName.style.display = "block";

            console.log(task);
        });

        const nameInput = document.createElement("input");
        nameInput.setAttribute("type", "text");
        nameInput.classList.add("task-input");
        nameInput.value = task.name;
        nameInput.style.display = "none";

        nameForm.appendChild(nameInput);

        nameInput.addEventListener("blur", () => {
            taskName.style.display = "block";
            nameForm.style.display = "none";
            nameInput.style.display = "none";
        });

        taskName.addEventListener("dblclick", () => {
            taskName.style.display = "none";
            nameForm.style.display = "block";
            nameInput.style.display = "block";
            nameInput.focus();
        });

        const descriptionForm = document.createElement("form");
        descriptionForm.setAttribute("id", "description-form")
        descriptionForm.style.display = "none";
        descriptionForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const newDescription = descriptionInput.value;
            if (newDescription) {
                task.description = newDescription;
                editTask(task, task.name, newDescription, task.dueDate, task.priority);
                taskDescription.textContent = "Task Description: " + newDescription;
            }

            descriptionForm.style.display = "none";
            descriptionInput.style.display = "none";
            taskDescription.style.display = "block";
        });

        const descriptionInput = document.createElement("input");
        descriptionInput.setAttribute("type", "text");
        descriptionInput.classList.add("task-input");
        descriptionInput.value = task.description;
        descriptionInput.style.display = "none";

        descriptionForm.appendChild(descriptionInput);
        
        descriptionInput.addEventListener("blur", () => {
            taskDescription.style.display = "block";
            descriptionForm.style.display = "none";
            descriptionInput.style.display = "none";
        });


        const taskDescription = document.createElement("span");
        taskDescription.textContent = task.description;
        if (taskDescription.textContent === "") {
            taskDescription.textContent = "Double click to add task description";
        };

        taskDescription.addEventListener("dblclick", () => {
            taskDescription.style.display = "none";
            descriptionForm.style.display = "block";
            descriptionInput.style.display = "block";
            descriptionInput.focus();
        });

        const dueDateForm = document.createElement("form");
        dueDateForm.style.display = "none";
        dueDateForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const newDueDate = dueDateInput.value;
            if (newDueDate) {
                task.dueDate = newDueDate;
                editTask(task, task.name, task.description, newDueDate, task.priority);
                taskDueDate.textContent = task.formatedDate;
            }

            console.log(task);

            dueDateForm.style.display = "none";
            dueDateInput.style.display = "none";
            taskDueDate.style.display = "block";
        });

        const dueDateInput = document.createElement("input");
        dueDateInput.setAttribute("type", "date");
        dueDateInput.classList.add("task-input");
        dueDateInput.value = task.dueDate;
        dueDateInput.style.display = "none";

        const dueDateSubmitButton = document.createElement("button");
        dueDateSubmitButton.style.display = "none";

        dueDateInput.addEventListener("blur", () => {

            taskDueDate.style.display = "block";
            dueDateForm.style.display = "none";
            dueDateInput.style.display = "none";
        });

        dueDateForm.appendChild(dueDateInput);
        dueDateForm.appendChild(dueDateSubmitButton);

        const taskDueDate = document.createElement("span");
        taskDueDate.textContent = task.formatedDate;

        if (taskDueDate.textContent === "" || taskDueDate.textContent === "undefined") {
            taskDueDate.textContent = "Double click to add date";
        };

        taskDueDate.addEventListener("dblclick", () => {
            taskDueDate.style.display = "none";
            dueDateForm.style.display = "block";
            dueDateInput.style.display = "block";
            dueDateInput.focus();
        });
    
        const taskDeleteButton = document.createElement("button");
        taskDeleteButton.textContent = "x";
        taskDeleteButton.classList.add("task-delete-button");
        taskDeleteButton.addEventListener("click", (event) => {
            if (confirm("Are you sure you want to delete this task?")) {
                event.stopPropagation();
                deleteTask(task);
                taskElement.remove();
            }
        });


        taskMain.appendChild(checkbox);
        taskMain.appendChild(taskName);
        taskMain.appendChild(nameForm);
        taskMain.appendChild(taskDueDate);
        taskMain.appendChild(dueDateForm);
        taskMain.appendChild(taskDeleteButton);

        taskElement.appendChild(taskMain);

        taskDetails.appendChild(taskDescription);
        taskDetails.appendChild(descriptionForm);
        taskElement.appendChild(taskDetails);

        return taskElement;
    };

    const displayTasks = (currentTab, tasksContainer) => {
        // Wyczyść poprzednie zadania

        const tasksList = document.createElement("div");
        tasksList.classList.add("tasks-list");

        while (tasksContainer.firstChild) {
            tasksContainer.removeChild(tasksContainer.firstChild);
        }

        // Dodaj opisy kolumn
        const taskName = document.createElement("span");
        taskName.textContent = "Task name";

        const taskDueDate = document.createElement("span");
        taskDueDate.textContent = "Task due date";

        const tasksHeader = document.createElement("div");
        tasksHeader.classList.add("task-header");

        tasksHeader.appendChild(taskName);
        tasksHeader.appendChild(taskDueDate);

        tasksList.appendChild(tasksHeader);


        // Wyświetl zadania z aktualnej zakładki
        if (currentTab) {
            currentTab.tasks.forEach((task) => {
                const taskElement = createTaskElement(task);
                tasksList.appendChild(taskElement);
            });
        }

        // add input for name, description, dueDate, priority

        const nameInput = document.createElement("input");
        nameInput.setAttribute("type", "text");
        nameInput.setAttribute("placeholder", "New task name");
        nameInput.classList.add("task-input");

        const descriptionInput = document.createElement("input");
        descriptionInput.setAttribute("type", "text");
        descriptionInput.setAttribute("placeholder", "New task description");
        descriptionInput.classList.add("task-input");

        const dueDateInput = document.createElement("input");
        dueDateInput.setAttribute("type", "date");
        dueDateInput.classList.add("task-input");

        const priorityInput = document.createElement("select");
        priorityInput.classList.add("task-input");
        priorityInput.required = true;

        const placeholder = document.createElement("option");
        placeholder.setAttribute("value", "");
        placeholder.textContent = "Click to select priority";

        const highPriority = document.createElement("option");
        highPriority.setAttribute("value", "high");
        highPriority.textContent = "High";

        const mediumPriority = document.createElement("option");
        mediumPriority.setAttribute("value", "medium");
        mediumPriority.textContent = "Medium";

        const lowPriority = document.createElement("option");
        lowPriority.setAttribute("value", "low");
        lowPriority.textContent = "Low";

        priorityInput.appendChild(placeholder);
        priorityInput.appendChild(highPriority);
        priorityInput.appendChild(mediumPriority);
        priorityInput.appendChild(lowPriority);

        const addButton = document.createElement("button");
        addButton.textContent = "Add task";
        addButton.classList.add("add-task-button");

        addButton.addEventListener("click", () => {
            if (nameInput.value && priorityInput.value) {
                addTask(currentTab, nameInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value);
                displayTasks(currentTab, tasksContainer);
            } else {
                alert("Task name and priority are required!");
            }
        });

        const taskInputContainer = document.createElement("div");
        taskInputContainer.classList.add("task-input-container");

        taskInputContainer.appendChild(nameInput);
        taskInputContainer.appendChild(descriptionInput);
        taskInputContainer.appendChild(dueDateInput);
        taskInputContainer.appendChild(priorityInput);

        const addNewTaskContainer = document.createElement("div");
        addNewTaskContainer.classList.add("add-new-task-container");

        addNewTaskContainer.appendChild(taskInputContainer);
        addNewTaskContainer.appendChild(addButton);

        tasksContainer.appendChild(tasksList);
        tasksContainer.appendChild(addNewTaskContainer);

    };


    return { displayTasks };
})();