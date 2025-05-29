import { createProject, projectsList } from "./taskManager.js";

    function initialize() {
    createProject("Project 1", "Initial todo project")

    console.log("Initial:", projectsList);
    }

    export default initialize;