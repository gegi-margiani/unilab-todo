import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    completedTodos: 0,
    totalTodos: 0,
  },
  reducers: {
    addTodo(state, action) {
      state.todos.unshift({
        ...action.payload,
        isCompleted: false,
        isFailed: false,
        id: uuidv4(),
      });
      state.totalTodos++;
      localStorage.setItem('todos', JSON.stringify(state));
    },
    changeTodoStatus(state, action) {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      if (state.todos[todoIndex].isCompleted) {
        state.completedTodos--;
      } else {
        state.completedTodos++;
      }
      state.todos[todoIndex].isCompleted = !state.todos[todoIndex].isCompleted;
      localStorage.setItem('todos', JSON.stringify(state));
    },
    deleteTodoStatus(state, action) {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      if (state.todos[todoIndex].isCompleted) {
        state.completedTodos--;
      }
      state.todos.splice(todoIndex, 1);
      state.totalTodos--;
      localStorage.setItem('todos', JSON.stringify(state));
    },
    setTodoAsFailed(state, action) {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      state.todos[todoIndex].isFailed = true;
      state.todos[todoIndex].isCompleted = null;
    },
    initializeTodos(state, action) {
      if (localStorage.getItem('todos')) {
        return JSON.parse(localStorage.getItem('todos'));
      } else {
        return {
          todos: [],
          completedTodos: 0,
          totalTodos: 0,
        };
      }
    },
    clearTodos(state, action) {
      localStorage.clear();
      return [];
    },
  },
});

export const {
  addTodo,
  changeTodoStatus,
  deleteTodoStatus,
  initializeTodos,
  clearTodos,
  setTodoAsFailed,
} = todosSlice.actions;
export default todosSlice.reducer;
