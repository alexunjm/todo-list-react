import React from "react";
import cx from "classnames";
import { connect } from 'react-redux';

import { toggleTodo } from '../../../redux/actionCreators'

const Todo = ({ todo, toggleTodo }) => (
  <li
    className="todo-item"
    onClick={() => {toggleTodo(todo.id)} /** dispatches action to toggle todo */}
  >
    {todo && todo.completed ? "👌" : "👋"}{" "}
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      {todo.content}
    </span>
  </li>
);


/***
 * Container
 */
const mapStateToProps = null

const mapDispatchToProps = {
  toggleTodo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)
