import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import { fetchTasks } from "../../../redux/fetch";
import { todoSelector } from "../../../redux/selectors";

class TodoList extends React.Component {/* 
  constructor(props) {
    super(props);
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }
 */
  componentWillMount() {
    const { fetchTasks } = this.props;
    fetchTasks();
  }
/* 
  shouldComponentRender() {
    if (this.props.pending === false) return false;
    // more tests
    return true;
  } */

  render() {

    if (this.props.pending)
      return (
        <Loader
          type="ThreeDots"
          color="#AAA"
          height={100}
          width={100}
        />
      );

    return (
      <div className="list-wrapper">
        {this.props.error && <span className="product-list-error">{this.props.error}</span>}
        <ul className="todo-list">
          {this.props.todos && this.props.todos.length
            ? this.props.todos.map((todo, index) => {
                return <Todo key={`todo-${todo.id}`} todo={todo} />;
              })
            : "No todos to show"}
        </ul>
      </div>
    );
  }
}

/***
 * Container
 */
const {
  getTodoListPending,
  getFilteredTodoArray,
  getTodoListError,
} = todoSelector;

const mapStateToProps = (state) => {
  return {
    todos: getFilteredTodoArray(state),
    pending: getTodoListPending(state),
    error: getTodoListError(state),
  };
};

const mapDispatchToProps = {
  fetchTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
