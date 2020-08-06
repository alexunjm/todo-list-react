import { VISIBILITY_FILTERS } from "../constants";
/* 
export const getTodosState = store => store.todos;

export const getTodoList = store =>
  getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store, id) =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 * /
export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  console.log("getTodosByVisibilityFilter -> store, visibilityFilter", store, visibilityFilter)
  const allTodos = getTodos(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter(todo => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter(todo => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};
 */
export const getTodosByVisibilityFilter = (store) => {

  const activeFilter = store.hasOwnProperty('visibilityFilter')
    ? store.visibilityFilter.activeFilter
    : VISIBILITY_FILTERS.ALL;

  if (store && store.hasOwnProperty('todos')) {
    const result = store.todos.allIds.reduce((acc, id) => {
      if ( activeFilter === VISIBILITY_FILTERS.ALL
        || ( (activeFilter === VISIBILITY_FILTERS.COMPLETED) && store.todos.byIds[id].completed === true )
        || ((activeFilter === VISIBILITY_FILTERS.INCOMPLETE) && store.todos.byIds[id].completed === false ) ) {

        return [
          ...acc,
          {...store.todos.byIds[id], id}
        ]
      }
      return acc;
    }, []);
    return result;
  }
  return [];
}