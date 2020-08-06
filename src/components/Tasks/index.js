import React from "react";

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import VisibilityFilters from './VisibilityFilters';

class Tasks extends React.Component {

  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  render() {
    return (
      <div className="todo-app">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
        <VisibilityFilters />
      </div>
    );
  }
}

export default Tasks;
