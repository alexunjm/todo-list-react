import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

import taskApiConnection from "../../../redux/modules/reduxTaskModule/taskApiConnection";
import taskSelector from "../../../redux/modules/reduxTaskModule/taskSelector";
import Spinner from "../../../shared/ui-components/Spinner/Spinner";

class TodoList extends React.Component {
  
  componentDidMount() {
    this.props.queryTasks();
  }

  render() {

    if (this.props.pending)
      return (
        <Spinner />
      );

    return (
      <div className="list-wrapper">
        {this.props.error && <span className="error">{this.props.error}</span>}
        <ul className="todo-list">
          {this.props.tasks && this.props.tasks.length
            ? this.props.tasks.map((task, index) => {
                return <Todo key={`task-${task.id}`} task={task} />;
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
  getFilteredTasks,
  isApiPending,
  isApiError,
} = taskSelector;

const mapStateToProps = (state) => {
  return {
    tasks: getFilteredTasks(state),
    pending: isApiPending(state),
    error: isApiError(state),
  };
};

const mapDispatchToProps = {
  queryTasks: taskApiConnection.queryTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
