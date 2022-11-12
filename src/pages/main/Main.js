import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import Todos from '../../components/todos/Todos';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../reducers/todos';
import { StyledMain } from './StyledMain';

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
