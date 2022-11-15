import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTodoAsFailed } from '../reducers/todos';

const useTodos = () => {
  const todos = useSelector(({ todos }) => todos.todos);
  const dispatch = useDispatch();
  const [sortedTodos, setSortedTodos] = useState(null);
  const [currFilters, setCurrFilters] = useState({
    status: 'Not Completed',
    filter: 'DueDate:A-Z',
  });
  useEffect(() => {
    if (todos) {
      let sortedTodosCopy = todos.filter((todo) => {
        if (new Date(todo.dueDate) - Date.now() < 0) {
          dispatch(setTodoAsFailed(todo.id));
        }
        if (currFilters.status === 'Not Completed') {
          return todo.isCompleted === false;
        } else if (currFilters.status === 'Completed') {
          return todo.isCompleted;
        } else if (currFilters.status === 'Failed') {
          return todo.isFailed;
        } else {
          return todo;
        }
      });

      if (currFilters.filter) {
        if (currFilters.filter === 'DueDate:A-Z') {
          setSortedTodos(
            sortedTodosCopy.sort(
              (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
            )
          );
        } else if (currFilters.filter === 'DueDate:Z-A') {
          setSortedTodos(
            sortedTodosCopy.sort(
              (b, a) => new Date(a.dueDate) - new Date(b.dueDate)
            )
          );
        } else if (currFilters.filter === 'Priority:A-Z') {
          setSortedTodos(
            sortedTodosCopy.sort((a, b) => {
              if (a.priority === 'High') {
                return 1;
              } else if (a.priority === 'Medium' && b.priority === 'High') {
                return -1;
              } else if (a.priority === 'Medium') {
                return 1;
              } else {
                return -1;
              }
            })
          );
        } else {
          setSortedTodos(
            sortedTodosCopy.sort((b, a) => {
              if (a.priority === 'High') {
                return 1;
              } else if (a.priority === 'Medium' && b.priority === 'High') {
                return -1;
              } else if (a.priority === 'Medium') {
                return 1;
              } else {
                return -1;
              }
            })
          );
        }
      }
      setSortedTodos(sortedTodosCopy);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, currFilters]);

  return { sortedTodos, currFilters, setCurrFilters };
};

export default useTodos;
