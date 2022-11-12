import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import styled from 'styled-components';
import Todos from '../components/Todos';
import PoppinsSemiBold from '../assets/fonts/Poppins/Poppins-SemiBold.ttf';
import PoppinsLight from '../assets/fonts/Poppins/Poppins-Light.ttf';
import { useDispatch } from 'react-redux';
import { addTodo } from '../reducers/todos';

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
  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 2em;
      overflow-wrap: break-word;
    }
    form {
      display: flex;
      width: 100vw;
      margin-bottom: 51px;
      margin-top: 27px;
    }
    form > input[type='text'] {
      width: 70vw;
      height: 60px;
      padding: 0px calc(10vw / 2) 0px;
    }
    form > input[type='button'] {
      width: 20vw;
      height: 62px;
      font-size: 1.6em;
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

    const todoText = inputTodo.current;
    window.addEventListener('keydown', (e) => {
      if (document.activeElement === todoText && e.key === 'Enter')
        handleClick(e);
    });
    return () => {
      window.removeEventListener('keydown', (e) => {
        if (document.activeElement === todoText && e.key === 'Enter')
          handleClick(e);
      });
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (inputTodo.current.value) {
      dispatch(addTodo(inputTodo.current.value));
      inputTodo.current.value = '';
    }
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
