import { todoActionCreators } from '../actionCreators'


export const saveTodo = (content) => {
  return dispatch => {
    setTimeout(() => {
      console.log("saveTodo -> dispatch", dispatch)
      dispatch(todoActionCreators.addTodo(content))
    }, 2000);
  }
};
