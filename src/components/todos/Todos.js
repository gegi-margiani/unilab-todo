import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTodoStatus, deleteTodoStatus } from '../../reducers/todos';
import { ReactComponent as CompleteIcon } from '../../assets/images/complete-icon.svg';
import { ReactComponent as DeleteIcon } from '../../assets/images/delete-icon.svg';
import { StyledIconDiv, StyledTodo } from './StyledTodos';

function Todos() {
  const dispatch = useDispatch();
  const toggleIsComplete = (todo) => {
    dispatch(changeTodoStatus(todo.id));
  };
  const deleteTodo = (todo) => {
    dispatch(deleteTodoStatus(todo.id));
  };

  const todos = useSelector(({ todos }) => todos.todos);
  return (
    <div>
      {todos &&
        todos.map((todo) => (
          <StyledTodo key={todo.id} isCompleted={todo.isCompleted}>
            <span>{todo.content}</span>
            <div>
              <StyledIconDiv
                onClick={() => {
                  toggleIsComplete(todo);
                }}
              >
                <CompleteIcon />
              </StyledIconDiv>
              <StyledIconDiv
                onClick={(e) => {
                  e.preventDefault();
                  deleteTodo(todo);
                }}
              >
                <DeleteIcon />
              </StyledIconDiv>
            </div>
          </StyledTodo>
        ))}
    </div>
  );
}

export default Todos;
