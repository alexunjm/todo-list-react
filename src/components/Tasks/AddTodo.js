import React from "react";
import { connect } from 'react-redux';

import taskApiConnection from "../../redux/modules/reduxTaskModule/taskApiConnection";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    // dispatches actions to add todo
    this.props.addTask(this.state.input);
    // sets state back to empty string
    this.updateInput("");
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}


/***
 * Container
 */
const mapStateToProps = null;

const mapDispatchToProps = {
  addTask: taskApiConnection.add
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);