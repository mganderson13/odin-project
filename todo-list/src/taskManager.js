import { home } from "./home";

const projectsList = JSON.parse(localStorage.getItem("storedProjectsList")) || [];
    
    function createProject(title, description){
        const newProject= {
            title: title,
            description: description,
            uuid: self.crypto.randomUUID(),
            todos: []
        }
    
        projectsList.push(newProject);
        localStorage.setItem("storeProjectsList", JSON.stringify(projectsList));
        
        return newProject;
    };

    function createTodo(title, description, dueDate, priority, project) {
        const newTodo= {
            title: title,
            description: description,
            uuid: self.crypto.randomUUID(),
            dueDate: dueDate,
            priority: priority,
            done: false,
            project: project,
            //where should this function go?
            completed() {
                return (!this.done)
            }
        }

    function addToProject(project, todo) {
        let addToProject = projectsList.find(findProject => findProject.title === project)
        addToProject.todos.push(todo);
        localStorage.storedProjectsList = JSON.stringify(projectsList);
    }

    addToProject(project, newTodo);

    return {
        newTodo,
        addToProject,
    }
    };
    
    function editProject(project, title, description) {
        project.title = title;
        project.description = description;

    }

    function editTodo(todo, title, description, dueDate, priority) {
        todo.title = title;
        todo.description = description;
        todo.dueDate = dueDate;
        todo.priority = priority;
    }

    function deleteProject(projectUUID) {
        const projectIndex = projectsList.findIndex(project => project.uuid === projectUUID)

        if (projectIndex !== -1) {
            projectsList.splice(projectIndex, 1);
        }
        localStorage.storedProjectsList = JSON.stringify(projectsList);
    }

    function deleteTodo(todoUUID, projectUUID) {
        const project = projectsList.find(project => project.uuid === projectUUID)
        const todoIndex = project.todos.findIndex(todo => todo.uuid === todoUUID)

        if (todoIndex !== -1) {
            project.todos.splice(todoIndex, 1);
        }
        localStorage.storedProjectsList = JSON.stringify(projectsList);
    }
    
    export {
        projectsList,
        createProject,
        createTodo,
        editProject,
        editTodo,
        deleteProject,
        deleteTodo,
    }