document.addEventListener("DOMContentLoaded", () => {
  addEventListener("submit", function(e) {
    //Prevent Reload
    e.preventDefault();
    //Callback function
    buildToDo();
  })
  function buildToDo() {
    //Grab Description
    let task = document.querySelector("#new-task-description").value;

    //Grab Priority
    let priority = document.querySelector('#priority-dropdown').value;

    //Create New ToDo Element
    let newToDo = document.createElement("p");
    newToDo.textContent = task;
    switch (priority) {
      case '1':
        newToDo.style.color = 'green';
        break;
      case '2':
        newToDo.style.color = 'yellow';
        break;
      case '3':
        newToDo.style.color = 'red';
        break;
    }

    //Grab List
    const toDoList = document.querySelector("#list");

    //Append Element to List
    toDoList.appendChild(newToDo);

    //Reset Form
    const taskForm = document.querySelector("#create-task-form");
    taskForm.reset();
  }
});
  
