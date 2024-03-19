import { Task } from "../domain/tasks.js";
import {
  addTask,
  completeTaskController,
  deleteTaskController,
} from "./task.controller.js";
import {
  DOMStrings,
  addListTask,
  completeListTask,
  deleteListTask,
} from "./ui.controller.js";

// App Controller

// Private Methods
const idFinder = (element) => {
  // find task id
  const taskId = element.target.closest(".item").id;
  // check if it is a valid task
  if (!taskId) {
    alert("Couldn't find the task");
    return;
  }
  return taskId;
};

const deleteTask = (event) => {
  const taskId = idFinder(event);
  // delete the task from the UI
  deleteListTask(taskId);
  // delete the task from the data structure
  deleteTaskController(taskId);
};

const completeTask = (event) => {
  const taskId = idFinder(event);
  // change to true the done property in data structure
  completeTaskController(taskId);
  // change the UI to show the task is completed
  completeListTask(taskId);
};

// Public Methods
const addNewTask = () => {
  let input;
  let newTask = new Task();
  // Get inputs data from DOM
  input = DOMStrings.taskDescription;
  const cleanText = input.value;
  if (!cleanText) {
    alert("Please enter a task");
    return;
  }
  // Add the task to the data structure
  newTask = addTask(cleanText);
  // add the task to the UI
  addListTask(newTask);
  // clear the field
  input.value = "";
  input.focus();
};

const containerController = (event) => {
  const clickedButton = event.target.className;
  const completedButton = "ion-ios-checkmark-outline";
  clickedButton === completedButton ? completeTask(event) : deleteTask(event);
};

export { addNewTask, containerController };
