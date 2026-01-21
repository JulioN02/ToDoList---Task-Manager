function storeTaskInLocalStorage(task){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
};

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task)=>{
        taskList.appendChild(createTaskElement(task))
    })
};