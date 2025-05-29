//title
//add project button
//project list
//click on project to display project card

//imports: project list, createProject function
import newProject from "./newProject.js";
const { newProjectDialog } = newProject();
//import projectCard

function home() {

    const homeContainer = document.createElement("div");
    homeContainer.classList.add("homeContainer");
    document.body.appendChild(homeContainer);

    const homeTitle = document.createElement("h1")
    homeTitle.textContent = "Task Keeper";
    homeContainer.appendChild(homeTitle);

    homeContainer.appendChild(newProjectDialog);

    const addProjectButton = document.createElement("button");
    addProjectButton.classList.add("addProjectButton");
    addProjectButton.innerHTML= "Add Project";
    homeContainer.appendChild(addProjectButton);
    //this should open the form 
    addProjectButton.addEventListener("click", () => {
        newProjectDialog.showModal();
    });

    const taskContainer = document.createElement("div");
    taskContainer.classList.add("taskContainer");
    homeContainer.appendChild(taskContainer);

    //sideBar
    const sideBarContainer = document.createElement("div");
    sideBarContainer.classList.add("sideBarContainer")
    homeContainer.appendChild(sideBarContainer);

    const sideBarTitle = document.createElement("h2");
    sideBarTitle.textContent = "Projects";
    sideBarContainer.appendChild(sideBarTitle);

}

function renderSidebar() {
    const sideBarContainer = document.querySelector(".sideBarContainer");

    // Clear existing sidebar content before re-rendering
    sideBarContainer.innerHTML = ""; 

    const storedProjectsList = JSON.parse(localStorage.getItem("storedProjectsList"));
    for (let i = 0; i < storedProjectsList.length; i++ ){
    const sideBarProject = document.createElement("h4");
        sideBarProject.textContent = `${storedProjectsList[i].title}`;
        sideBarProject.addEventListener("click", () => {
            displayProjectCard(storedProjectsList[i]);
        });

        sideBarContainer.appendChild(sideBarProject);
    }
    console.log("Stored projectsList:", storedProjectsList);
}


export { home };