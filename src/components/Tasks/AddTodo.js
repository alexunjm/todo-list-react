import React from "react";
import { connect } from 'react-redux';

import { addTodo } from '../../redux/actionCreators';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
    // samples for test
    [...Array(5).keys()].forEach((x, i) => {
      console.log("AddTodo -> constructor -> x, i", x, i)
      this.props.addTodo('test ' + (i + 1));
    })

  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    // dispatches actions to add todo
    this.props.addTodo(this.state.input);
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
  addTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);