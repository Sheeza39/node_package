const todoList = require('./index');

todoList.addTodo('Learn Node.js');
todoList.addTodo('Write blog post');
todoList.listTodos();
todoList.deleteTodo(0);
todoList.listTodos();
