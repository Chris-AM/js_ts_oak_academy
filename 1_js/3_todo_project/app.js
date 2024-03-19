import { DOMStrings } from "./controllers/ui.controller.js";
import {
  addNewTask,
  containerController,
} from "./controllers/app.controller.js";
// Data Controller

// App
DOMStrings.addBtn.addEventListener("click", addNewTask);
// DOMStrings.deleteBtn.addEventListener("click", deleteTask);

document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addNewTask();
  }
});

DOMStrings.taskContainer.addEventListener("click", containerController);
