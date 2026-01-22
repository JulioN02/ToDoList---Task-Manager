const taskForm = document.getElementById("task-form");

const taskList = document.getElementById("task-list");

loadTasks();
taskForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const taskInput = document.getElementById("task-input");
    const task = taskInput.value;
    if(task) {
        taskList.append(createTaskElement(task));
        storeTaskInLocalStorage(task);
        taskInput.value = "";
    }
});

//Funcion para crear un nuevo elemento Task
function createTaskElement(task){
    const li = document.createElement("li");
    li.textContent=task;
    li.append(createButton("🗑️", "delete-btn"), createButton("📝", "edit-btn"));
    return li;
}

//Funcion para crear los botones del nuevo elemento Task
function createButton(text, className){
    const btn = document.createElement("span");
    btn.textContent = text;
    btn.className = className;
    return btn;
}

taskList.addEventListener("click", (event)=>{
    if(event.target.classList.contains("delete-btn")){
        deleteTask(event.target.parentElement)
    } else if (event.target.classList.contains("edit-btn")){
        editTask(event.target.parentElement);
    }
});

//Funcion para validar y borrar un task
function deleteTask(taskItem){
    if(confirm("¿Do you want delete this Task?")){
        taskItem.remove();
        updateLocalStorage();
    };
};

//Funcion para editar un Task
function editTask(taskItem){
    const newTask = prompt("Edit Task", taskItem.firstChild.textContent)
    if(newTask !== null){
        taskItem.firstChild.textContent = newTask;
        updateLocalStorage();
    };
};