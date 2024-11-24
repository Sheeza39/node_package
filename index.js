

let todos = [];

function addTodo(task) {
  todos.push(task);
  console.log(`Added: "${task}"`);
}

function listTodos() {
  if (todos.length === 0) {
    console.log("No to-dos found.");
  } else {
    console.log("Your To-Do List:");
    todos.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
}

function deleteTodo(index) {
  if (index >= 0 && index < todos.length) {
    const removedTask = todos.splice(index, 1);
    console.log(`Deleted: "${removedTask[0]}"`);
  } else {
    console.log("Invalid index.");
  }
}

module.exports = {
  addTodo,
  listTodos,
  deleteTodo
};
