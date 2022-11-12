import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  changeTodoStatus,
  deleteTodoStatus,
  initializeTodos,
} from '../reducers/todos';
import PoppinsLight from '../assets/fonts/Poppins/Poppins-Light.ttf';
import { ReactComponent as CompleteIcon } from '../assets/images/complete-icon.svg';
import { ReactComponent as DeleteIcon } from '../assets/images/delete-icon.svg';

const StyledTodo = styled.div`
  @font-face {
    font-family: 'Poppins-Light';
    src: url(${PoppinsLight}) format('woff');
  }
  display: flex;
  justify-content: space-between;
  width: 595px;
  background: #000000 0% 0% no-repeat padding-box;
  opacity: ${(props) => (props.isCompleted ? 0.2 : 1)};
  border-radius: 4px;
  min-height: 54px;
  margin-bottom: 16px;
  span {
    display: flex;
    align-items: center;
    margin-left: 24px;
    font: normal normal 300 22px/33px 'Poppins-Light';
    color: white;
  }
  & > div {
    display: flex;
  }
  & > div > div:first-child {
    margin-right: 6px;
  }
  @media only screen and (max-width: 600px) {
    width: 100vw;
  }
`;
const StyledIconDiv = styled.div`
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 48px;
  :hover {
    cursor: pointer;
    background-color: green;
  }
`;
function Todos() {
  const dispatch = useDispatch();
  const toggleIsComplete = (todo) => {
    dispatch(changeTodoStatus(todo.id));
  };
  const deleteTodo = (todo) => {
    dispatch(deleteTodoStatus(todo.id));
  };
  useEffect(() => {
    if (localStorage.getItem('todos')) dispatch(initializeTodos());
  }, []);

  const todos = useSelector(({ todos }) => todos.todos);
  return (
    <div>
      {todos.map((todo) => (
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
