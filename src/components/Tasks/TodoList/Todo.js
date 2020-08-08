import React from "react";
// ejemplo classnames
import cx from "classnames";
import { connect } from 'react-redux';

import taskApiConnection from '../../../redux/modules/reduxTaskModule/taskApiConnection'

const Todo = ({ task, toggleComplete }) => (
  <li
    className="task-item"
    onClick={() => {toggleComplete(task)} /** dispatches action to toggle task */}
  >
    {task && task.completed ? "👌" : "👋"}{" "}
    <span
      className={cx(
        "task-item__text",
        task && task.completed && "task-item__text--completed"
      )}
    >
      {task.name}
    </span>
  </li>
);


/***
 * Container
 */
const mapStateToProps = null

const mapDispatchToProps = {
  toggleComplete: taskApiConnection.toggleComplete
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)
