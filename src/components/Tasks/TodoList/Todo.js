import React from "react";
// ejemplo classnames
import cx from "classnames";
import { connect } from 'react-redux';

import taskActionCreator from '../../../redux/modules/reduxTaskModule/taskActions/taskActionCreator'

const Todo = ({ task, toggleComplete }) => (
  <li
    className="task-item"
    onClick={() => {toggleComplete(task.id)} /** dispatches action to toggle task */}
  >
    {task && task.completed ? "👌" : "👋"}{" "}
    <span
      className={cx(
        "task-item__text",
        task && task.completed && "task-item__text--completed"
      )}
    >
      {task.content}
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
