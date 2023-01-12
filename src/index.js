document.addEventListener("DOMContentLoaded", () => {
  addEventListener("submit", function(e) {
    //Prevent Reload
    e.preventDefault();
    //Callback function
    buildToDo();
  })
  function buildToDo() {
    //Grab Input
    let task = document.querySelector("#new-task-description").value;
    console.log(task);
    
    //Create New ToDo Element
    let newToDo = document.createElement("p");
    newToDo.textContent = task;
    console.log(newToDo);

    //Grab List
    const toDoList = document.querySelector("#list");
    console.log(toDoList);

    //Append Element to List
    toDoList.appendChild(newToDo);

    //Reset Form
    const taskForm = document.querySelector("#create-task-form");
    taskForm.reset();
  }
});
  
