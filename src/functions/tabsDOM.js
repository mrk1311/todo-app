// tabsDOM.js

import { projects, addProject, deleteProject, editProject } from "./projects";
import { tasksDOM } from "./tasksDOM";

export const tabsDOM = (() => {

    let currentTab = null;

    const createTabElement = (project, tabsContainer, tasksContainer) => {
        const tab = document.createElement("div");
        tab.classList.add("tab");

        const tabName = document.createElement("span");
        tabName.textContent = project.name;

        const changeTabNameForm = document.createElement("form");
        changeTabNameForm.style.display = "none";
        changeTabNameForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const newProjectName = inputField.value;
            if (newProjectName) {
                project.name = newProjectName;
                editProject(project, newProjectName);
                createTabs(tabsContainer, tasksContainer);
                console.log(projects)
            }

            tabName.style.display = "block";
            inputField.style.display = "none";
        });

        const inputField = document.createElement("input");
        inputField.classList.add("tab-input");
        inputField.value = project.name;
        inputField.style.display = "none"; // Hide input field by default

        inputField.addEventListener("blur", () => {
            tabName.style.display = "block";
            inputField.style.display = "none";
        });

        changeTabNameForm.appendChild(inputField);
        
        tabName.addEventListener("dblclick", () => {
            tabName.style.display = "none";
            changeTabNameForm.style.display = "block";
            inputField.style.display = "block";
            inputField.focus();
        });

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");

        if (project.name !== "+") {
            // Add delete button ("x") only for projects (not for the "+" button)

            deleteButton.textContent = "x";
            deleteButton.addEventListener("click", (event) => {
                event.stopPropagation(); // Prevent tab click event from firing
                if (confirm("Are you sure you want to delete this project?")) {
                    deleteProject(project);
                    createTabs(tabsContainer, tasksContainer);
                }
            });

            tab.appendChild(tabName);
            tab.appendChild(changeTabNameForm);
            tab.appendChild(deleteButton);
        } else {
            tab.appendChild(tabName);
        }

        return tab;
    };

    const createTabs = (tabsContainer, tasksContainer) => {
        // Remove existing tabs
        while (tabsContainer.firstChild) {
            tabsContainer.removeChild(tabsContainer.firstChild);
        }

        // Create tabs
        if (projects.length) {
            projects.forEach((project, index) => {
                const tab = createTabElement(project, tabsContainer, tasksContainer);

                tab.addEventListener("click", () => {
                    currentTab = project;
                    tasksDOM.displayTasks(currentTab, tasksContainer);
                    tabsContainer.childNodes.forEach((tab) => {
                        tab.classList.remove("active");
                    });
                    tab.classList.add("active");
                });

                tabsContainer.appendChild(tab);

                if (index === 0) {
                    currentTab = project;
                    tasksDOM.displayTasks(currentTab, tasksContainer);
                    tab.classList.add("active");
                }
            });
        } else {
            return
        }
        const newTabInput = document.createElement("input");
        newTabInput.type = "text";
        newTabInput.classList.add("tab-input");
        newTabInput.placeholder = "New project name";
        newTabInput.style.display = "none";

        newTabInput.addEventListener("blur", () => {
            newTabInput.style.display = "none";
            newTabForm.style.display = "none";
        }
        );

        const newTabForm = document.createElement("form");
        newTabForm.style.display = "none";

        newTabForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const newProjectName = newTabInput.value;
            if (newProjectName) {
                const newProject = { id: projects.length + 1, name: newProjectName, tasks: [] };
                addProject(newProject);
                createTabs(tabsContainer, tasksContainer);
                currentTab = newProject;
                tasksDOM.displayTasks(currentTab, tasksContainer);

                tabsContainer.childNodes.forEach((tab) => {
                    tab.classList.remove("active");
                });
                if (projects.length > 1) {
                    tabsContainer.lastChild.previousElementSibling.classList.add("active");
                } else {
                    // tabsContainer.lastChild.classList.add("active");
                }
            }

            newTabInput.style.display = "none";
        });


        // Add tab for adding new projects
        const addTab = createTabElement({ name: "+" }, tabsContainer, tasksContainer);
        addTab.addEventListener("click", () => {
            newTabInput.style.display = "block";
            newTabForm.style.display = "block";
            newTabInput.focus();
        });

        newTabForm.appendChild(newTabInput);

        addTab.appendChild(newTabForm);

        tabsContainer.appendChild(addTab);
    };

    return { createTabs };
})();
