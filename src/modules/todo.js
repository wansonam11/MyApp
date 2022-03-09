import { createAction, handleActions } from "redux-actions";
import createRequestThunk from "../lib/createRequestThunk";
import { createActionType } from "../lib/createRequestThunk";
import * as todoAPI from "../lib/apis/todos";

const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";
const MODIFY = "todos/UPDATE";
const LOAD_TODOS = "todos/LOAD_TODOS";

const [FETCH_ALL, FETCH_ALL_SUCCESS, FETCH_ALL_FAILURE] =
  createActionType("todos/FETCH_ALL");

const [INSERT_TODO, INSERT_TODO_SUCCESS, INSERT_TODO_FAILURE] =
  createActionType("todos/INSERT_TODO");

const [DELETE_TODO, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE] =
  createActionType("todos/DELETE_TODO");

// const [TOGGLE_TODO, TOGGLE_TODO_SUCCESS, TOGGLE_TODO_FAILURE] =
//   createActionType("todos/DELETE_TODO");

const [UPDATE_TODO, UPDATE_TODO_SUCCESS, UPDATE_TODO_FAILURE] =
  createActionType("todos/DELETE_TODO");

// export const insert = createAction(INSERT, (text) => ({
//   id: Date.now(),
//   text,
//   checked: false,
// }));
export const changeInput = createAction(CHANGE_INPUT, (input) => input);
export const insert = createRequestThunk(INSERT_TODO, todoAPI.insertTodo);
export const remove = createRequestThunk(DELETE_TODO, todoAPI.deleteTodo);
//export const remove = createAction(REMOVE, (id) => id);
//export const toggle = createRequestThunk(TOGGLE_TODO, todoAPI.toggleTodo);
export const toggle = createAction(TOGGLE, (id) => id);
export const modify = createRequestThunk(UPDATE_TODO, todoAPI.updateTodo);
//export const modify = createAction(MODIFY, (id, text) => ({ id, text }));
export const loadTodos = createAction(LOAD_TODOS, (todos) => todos);

export const fetchAllTodos = createRequestThunk(FETCH_ALL, todoAPI.fetchAll);

const init = {
  input: "",
  todos: [],
  error: null,
};

const todoList = handleActions(
  {
    [INSERT_TODO_SUCCESS]: (state, action) => ({
      ...state,
      todos: action.payload,
      error: null,
    }),

    [INSERT_TODO_FAILURE]: (state, action) => ({
      ...state,
      todos: action.payload,
      error: null,
    }),
    [FETCH_ALL_SUCCESS]: (state, action) => ({
      ...state,
      todos: action.payload,
      error: null,
    }),
    [FETCH_ALL_FAILURE]: (state, action) => ({
      ...state,
      todos: action.payload,
      error: null,
    }),

    [DELETE_TODO_SUCCESS]: (state, action) => ({
      ...state,
      todos: action.payload,
    }),

    [DELETE_TODO_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),

    [UPDATE_TODO_SUCCESS]: (state, action) => ({
      ...state,
      todos: action.payload,
    }),

    [UPDATE_TODO_FAILURE]: (state, action) => ({
      ...state,
      todos: action.payload,
    }),
    // [TOGGLE_TODO_SUCCESS]: (state, action) => ({
    //   ...state,
    //   todos: action.payload,
    // }),

    // [TOGGLE_TODO_FAILURE]: (state, action) => ({
    //   ...state,
    //   todos: action.payload,
    // }),
    [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),

    [INSERT]: (state, { payload: todo }) => ({
      ...state,
      todos: state.todos.concat(todo),
    }),

    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      ),
    }),

    // [REMOVE]: (state, { payload: id }) => ({
    //   ...state,
    //   todos: state.todos.filter((todo) => todo.id !== id),
    // }),

    [MODIFY]: (state, { payload: { id, text } }) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      ),
    }),

    [LOAD_TODOS]: (state, { payload: todos }) => ({
      ...state,
      todos,
    }),
  },
  init
);

export default todoList;
