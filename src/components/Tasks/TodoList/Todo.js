import React from "react";
// ejemplo classnames
import cx from "classnames";
import { connect } from 'react-redux';

import taskActionCreator from '../../../redux/modules/reduxTaskModule/taskActions/taskActionCreator'

const Todo = ({ todo, toggleComplete }) => (
  <li
    className="todo-item"
    onClick={() => {toggleComplete(todo.id)} /** dispatches action to toggle todo */}
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

const { toggleComplete } = taskActionCreator;
const mapDispatchToProps = {
  toggleComplete
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)
