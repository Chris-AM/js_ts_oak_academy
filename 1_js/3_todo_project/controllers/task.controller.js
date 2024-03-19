import { Task } from "../domain/tasks.js";
// Tasks Controller
let tasksArray = [];

// Add Task
const addTask = (taskDesc) => {
  let id;
  tasksArray.length > 0
    ? (id = tasksArray[tasksArray.length - 1].id + 1)
    : (id = 0);
  const task = new Task(id, taskDesc);
  tasksArray.push(task);
  return task;
};

// Delete Task
const deleteTaskController = (id) => {
  const index = tasksArray.findIndex((task) => task.id === parseInt(id));
  tasksArray.splice(index, 1);
  return tasksArray;
};

// Complete Task
const completeTaskController = (id) => {
  const index = tasksArray.findIndex((task) => task.id === parseInt(id));
  tasksArray[index].done = !tasksArray[index].done;
  return tasksArray;
};

export { addTask, deleteTaskController, completeTaskController };
