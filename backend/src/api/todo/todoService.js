const Todo = require("./todo");

Todo.methods(["get", "post", "put", "delete"]);
Todo.updateOptions({ new: true, runValidat: true });

module.exports = Todo;