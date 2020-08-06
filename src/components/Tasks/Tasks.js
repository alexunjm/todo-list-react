import React from "react";

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import VisibilityFilters from './VisibilityFilters';

const Tasks = () => (
  <div className="todo-app">
    <h1>Todo List</h1>
    <AddTodo />
    <TodoList />
    <VisibilityFilters />
  </div>
);

export default Tasks;
