import axios from "axios";

interface Task {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get<Task>(url).then((response) => {
  const taskData = response.data as Task;
  const userId = taskData.userId;
  const taskId = taskData.id;
  const title = taskData.title;
  const completed = taskData.completed;
  printTask({ userId, id: taskId, title, completed });
});

const printTask = (task: Task) => {
  console.log("Task => ", task);
};
