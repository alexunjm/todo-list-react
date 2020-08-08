import TODO_FILTERS from "./taskConstantFilter";

const is = (filter) => ({
  ALL: filter === TODO_FILTERS.ALL,
  COMPLETED: filter === TODO_FILTERS.COMPLETED,
  INCOMPLETE: filter === TODO_FILTERS.INCOMPLETE,
});

const applyFor = ({ filter, statusCompleted }) =>
  is(filter).ALL ||
  (is(filter).COMPLETED && statusCompleted === true) ||
  (is(filter).INCOMPLETE && statusCompleted === false);

export const getFilteredTodoArray = (store) => {
  const { data } = store.task;
  const { activeFilter } = store.todoFilter;

  const result = Object.keys(data).reduce((acc, id) => {
    return applyFor({
      filter: activeFilter,
      statusCompleted: data[id].completed,
    })
      ? [...acc, { ...data[id], id }]
      : acc;
  }, []);
  return result;
};
export const getActiveFilter = store => store.task.activeFilter;
export const getTodoListPending = state => state.task.pending;
export const getTodoListError = state => state.task.error;