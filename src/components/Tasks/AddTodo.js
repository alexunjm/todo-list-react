import React from "react";
import { connect } from 'react-redux';

import { addTodo } from '../../redux/actionCreators';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }
  
  cleanInput() {
    this.updateInput("");
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    // dispatches actions to add todo
    this.props.addTodo(this.state.input);
    // sets state back to empty string
    this.cleanInput();
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
const mapStateToProps = state => {
  return ({
    allIds: state.todos.allIds,
    byIds: state.todos.byIds
  })
}

const mapDispatchToProps = {
  addTodo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)