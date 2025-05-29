import { createProject, projectsList } from "./taskManager";

// Pop-up for new project
export default function newProject() {
  const newProjectDialog = document.createElement("dialog");
  newProjectDialog.id = "newProject";

  const newProjectForm = document.createElement("form");
  newProjectForm.classList.add("newProjectForm");

  // Title Label and Input
  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "projectTitle");
  titleLabel.textContent = "Project:";

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "projectTitle";

  // Description Label and Input
  const descLabel = document.createElement("label");
  descLabel.setAttribute("for", "projectDescription");
  descLabel.textContent = "Description:";

  const descInput = document.createElement("input");
  descInput.type = "text";
  descInput.id = "projectDescription";

  // Submit Button
  const submitButton = document.createElement("button");
  submitButton.classList.add("submitButton");
  submitButton.textContent = "Create Project";
  submitButton.type = "submit";

  // Exit Button
  const exitButton = document.createElement("button");
  exitButton.classList.add("exitButton");
  exitButton.textContent = "X";
  exitButton.addEventListener("click", function (event) {
    event.preventDefault();
    newProjectDialog.close();
  });

  // Append elements to form
  newProjectForm.appendChild(exitButton);
  newProjectForm.appendChild(titleLabel);
  newProjectForm.appendChild(titleInput);
  newProjectForm.appendChild(descLabel);
  newProjectForm.appendChild(descInput);
  newProjectForm.appendChild(submitButton);


  // Handle form submission
  newProjectForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("projectTitle").value;
    const description = document.getElementById("projectDescription").value;

    createProject(title, description);
    console.log(projectsList);
    document.getElementById("projectTitle").value = "";
    document.getElementById("projectDescription").value = "";
    newProjectDialog.close();
  });

  newProjectDialog.appendChild(newProjectForm);
  document.body.appendChild(newProjectDialog);

  return { newProjectDialog };
}
