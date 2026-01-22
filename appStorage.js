function storeTaskInLocalStorage(task){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
};

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task)=>{
        taskList.appendChild(createTaskElement(task));
    })
};


function updateLocalStorage() {
  const tasks = Array.from(taskList.querySelectorAll("li")).map(
    (li) => li.firstChild.textContent
  );
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeFromLocalStorage(taskContent) {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  const updateTasks = tasks.filter((task) => task !== taskContent);

  localStorage.setItem("tasks", JSON.stringify(updateTasks));
}