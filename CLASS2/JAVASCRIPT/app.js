// Accessing the Dom
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", function () {
  // Get Input Value
  const task = taskInput.value.trim();

  // prevent empty task
  if (task === "") {
    alert("Please enter task");
    return;
  }

  // Create list item
  const li = document.createElement("li");

  // Create Task text
  const span = document.createElement("span");

  // Create Delete Btn
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete"; // you can 
  deleteBtn.className = "deleteBtn";

  // Add span and button into the list items
  span.append(task);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Append list items into ul
  taskList.appendChild(li);

  // clear Input when a task has been added
  taskInput.value = "";

  // Delete task
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });
});
