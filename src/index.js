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
    
    //Create New ToDo Element
    let newToDo = document.createElement("p");
    newToDo.textContent = `${task}  `;

    //Add Delete Button
    let delBtn = document.createElement("button");
    delBtn.textContent = "X";
    newToDo.appendChild(delBtn);

    //Add Event Listener
    delBtn.addEventListener('click', (event) => deleteItem(event));

    //Grab List
    const toDoList = document.querySelector("#list");

    //Append Element to List
    toDoList.appendChild(newToDo);

    //Reset Form
    const taskForm = document.querySelector("#create-task-form");
    taskForm.reset();
  }

  function deleteItem(event) {
    //do things
    //take in event parameter
    //kill the target's parent
    event.target.parentNode.remove();
  }


});
  
