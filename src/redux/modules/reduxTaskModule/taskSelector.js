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

const selectors = {
  getFilteredTasks: (store) => {
    const { data } = store.task;
    const { activeFilter } = store.task;

    const result = Object.keys(data).reduce((acc, id) => {
      return applyFor({
        filter: activeFilter,
        statusCompleted: data[id].completed,
      })
        ? [...acc, { ...data[id], id }]
        : acc;
    }, []);
    return result;
  },
  getActiveFilter: (store) => store.task.activeFilter,
  isApiPending: (state) => state.task.pending,
  isApiError: (state) => state.task.error,
};

export default selectors;
