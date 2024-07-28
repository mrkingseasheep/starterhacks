let todo = JSON.parse(localStorage.getItem("todo")) || [];
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const totalCount = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");
const addButton = document.querySelector(".btn");
const deleteButton = document.getElementById("deleteButton");
const imageElement = document.getElementById("conditional-image");

document.addEventListener("DOMContentLoaded", function () {
  addButton.addEventListener("click", addTask);
  todoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  });
  displayTasks();
});

function addTask() {
  const newTask = todoInput.value.trim();
  if (newTask !== "") {
    todo.push({ text: newTask, disabled: false });
    saveToLocalStorage();
    todoInput.value = "";
    displayTasks();
  }
}

function displayTasks() {
  todo.sort((a, b) => a.disabled - b.disabled);

  todoList.innerHTML = "";
  todo.forEach((item, index) => {
    const taskContainer = document.createElement("div");
    taskContainer.className = "todo-container";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo-checkbox";
    checkbox.id = `input-${index}`;
    checkbox.checked = item.disabled;
    checkbox.addEventListener("change", () => toggleTask(index));

    const taskText = document.createElement("p");
    taskText.id = `todo-${index}`;
    taskText.className = item.disabled ? "disabled" : "";
    taskText.textContent = item.text;
    taskText.addEventListener("click", () => editTask(index));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", () => deleteTask(index));

    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(taskText);
    taskContainer.appendChild(deleteButton);
    todoList.appendChild(taskContainer);
  });

  const totalTasks = todo.length;
  const activeTasks = todo.filter((item) => !item.disabled).length;
  const completedTasks = totalTasks - activeTasks;

  totalCount.textContent = totalTasks;
  todoCount.textContent = activeTasks;
  completedCount.textContent = completedTasks;
  updateImage(completedTasks);
}

function editTask(index) {
  const todoItem = document.getElementById(`todo-${index}`);
  const existingText = todo[index].text;
  const inputElement = document.createElement("input");

  inputElement.value = existingText;
  todoItem.replaceWith(inputElement);
  inputElement.focus();

  inputElement.addEventListener("blur", function () {
    const updatedText = inputElement.value.trim();
    if (updatedText) {
      todo[index].text = updatedText;
      saveToLocalStorage();
    }
    displayTasks();
  });
}

function toggleTask(index) {
  todo[index].disabled = !todo[index].disabled;
  saveToLocalStorage();
  displayTasks();
}

function deleteTask(index) {
  todo.splice(index, 1);
  saveToLocalStorage();
  displayTasks();
}

function saveToLocalStorage() {
  localStorage.setItem("todo", JSON.stringify(todo));
}

function updateImage(completedTasks) {
  let imageUrl = "";

  if (completedTasks <= 0) {
    imageUrl = "images\\bonsai_0.jpg";
  } else if (completedTasks == 1) {
    imageUrl = "images\\bonsai_1.jpg";
  } else if (completedTasks == 2) {
    imageUrl = "images\\bonsai_2.jpg";
  } else if (completedTasks == 3) {
    imageUrl = "images\\bonsai_3.jpg";
  } else if (completedTasks == 4) {
    imageUrl = "images\\bonsai_4.jpg";
  } else if (completedTasks == 5) {
    imageUrl = "images\\bonsai_5.jpg";
  } else if (completedTasks == 6) {
    imageUrl = "images\\bonsai_6.jpg";
  } else if (completedTasks == 7) {
    imageUrl = "images\\bonsai_7.jpg";
  } else if (completedTasks == 8) {
    imageUrl = "images\\bonsai_8.jpg";
  } else if (completedTasks >= 9 && completedTasks <= 14) {
    imageUrl = "images\\bonsai_9.jpg";
  } else {
    imageUrl = "images\\mushroom.jpg";
  }

  if (imageUrl) {
    imageElement.src = imageUrl;
    imageElement.style.display = "block";
  } else {
    imageElement.style.display = "none";
  }
}
