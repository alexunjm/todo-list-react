import { todoActionCreators } from "../actionCreators";

const {
  fetchTasksPending,
  fetchTasksSuccess,
  fetchTasksError,
} = todoActionCreators;

export const fetchTasks = () => {
  return (dispatch) => {
    dispatch(
      fetchTasksPending()
    ); 
    fetch("http://localhost/api/task/sample")
      .then((res) => {
        if (res.ok) return res.json()
        return {error: 'Unavailable server connection'}
      })
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchTasksSuccess(res.tasks));
        return res.tasks;
      })
      .catch((error) => {
        dispatch(fetchTasksError(error));
      });
      
      /* 
    setTimeout(() => {
      // samples for test
      const tasks = [...Array(5).keys()].map((x, i) => {
        return {
          id: i + 1,
          content: "test " + (i + 1),
          completed: false,
        };
      });
      dispatch(fetchTasksSuccess(tasks));
      return tasks;
    }, 3000);
     */
  };
}
