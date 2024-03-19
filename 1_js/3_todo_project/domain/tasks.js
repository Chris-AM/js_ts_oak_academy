// Task Constructor
class Task {
  constructor(id, description, done = false) {
    this.id = id;
    this.description = description;
    this.done = done;
  }
}

export { Task };

