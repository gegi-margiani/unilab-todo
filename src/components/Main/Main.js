import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import styled from 'styled-components';
import Todos from './Todos';
import PoppinsSemiBold from '../../fonts/Poppins/Poppins-SemiBold.ttf';
import PoppinsLight from '../../fonts/Poppins/Poppins-Light.ttf';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../reducers/todos';

const StyledMain = styled.main`
  @font-face {
    font-family: 'Poppins-SemiBold';
    src: url(${PoppinsSemiBold}) format('woff');
  }
  @font-face {
    font-family: 'Poppins-Light';
    src: url(${PoppinsLight}) format('woff');
  }
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 35px;
    font: normal normal 600 42px/63px 'Poppins-SemiBold';
  }
  form {
    display: flex;
    margin-bottom: 51px;
    margin-top: 27px;
  }
  form > input[type='text'] {
    padding-left: 24px;
    padding-right: 24px;
    width: 439px;
    height: 76px;
    background: #e6ebff 0% 0% no-repeat padding-box;
    border-radius: 4px;
    border: 0px;
    font: normal normal 300 22px/33px 'Poppins-Light';
    ::placeholder {
      opacity: 0.2;
    }
  }
  form > input[type='button'] {
    width: 108px;
    height: 78px;
    background: #5efc8d 0% 0% no-repeat padding-box;
    border-radius: 4px;
    border: 0px;
    font: normal normal 300 32px/48px 'Poppins-Light';
    :hover {
      background: #000000 0% 0% no-repeat padding-box;
      color: white;
    }
  }
`;

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputTodo = useRef(null);
  useEffect(() => {
    if (!localStorage.getItem('image') && !localStorage.getItem('name'))
      navigate('/auth');
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (inputTodo.current.value) dispatch(addTodo(inputTodo.current.value));
  };
  return (
    localStorage.getItem('image') &&
    localStorage.getItem('name') && (
      <div>
        <Header />
        <StyledMain>
          <h2>Add Your Daily Tasks</h2>
          <form>
            <input
              type="text"
              name="todo"
              id="todo"
              placeholder="my task"
              ref={inputTodo}
            />
            <input type="button" value="Add" onClick={handleClick} />
          </form>
          <Todos />
        </StyledMain>
      </div>
    )
  );
}

export default Main;
