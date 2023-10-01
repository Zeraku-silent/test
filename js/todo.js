const field = document.querySelector(".field");
const button = document.querySelector(".add");
const list = document.querySelector(".list");

function createTask(value) {
  const task = document.createElement("div");
  task.textContent = value;
  task.classList.add("task", "notCompleted");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("status");
  checkbox = task.appendChild(checkbox);
  checkbox.addEventListener("click", completeTask);
  return task;
}
function addTask() {
  if (field.value != " ") {
    const newTask = createTask(field.value);
    task = list.appendChild(newTask);
    field.value = "";
  }
}
function completeTask(event) {
  const target = event.target;
  const task = target.parentElement;
  console.log(target.checked);

  if (target.checked) {
    task.classList.remove("notCompleted");
    task.classList.add("completed");
  } else {
    task.classList.remove("completed");
    task.classList.add("notCompleted");
  }
}
button.addEventListener("click", addTask);
