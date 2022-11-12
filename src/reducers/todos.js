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
        content: action.payload,
        isCompleted: false,
        id: uuidv4(),
      });
      localStorage.setItem('todos', JSON.stringify(state));
      state.totalTodos++;
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
      localStorage.setItem('todos', JSON.stringify(state));
      state.totalTodos--;
    },
    initializeTodos(state, action) {
      return JSON.parse(localStorage.getItem('todos'));
    },
  },
});

export const { addTodo, changeTodoStatus, deleteTodoStatus, initializeTodos } =
  todosSlice.actions;
export default todosSlice.reducer;
