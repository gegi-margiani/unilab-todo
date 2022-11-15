import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import Todos from '../../components/todos/Todos';
import { useDispatch } from 'react-redux';
import { addTodo, initializeTodos } from '../../reducers/todos';
import { StyledMain, StyledFormDiv, ErrorMsg } from './Main.styled';

function Main() {
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputPriority = useRef(null);
  const inputDueDate = useRef(null);
  const inputText = useRef(null);

  useEffect(() => {
    if (!localStorage.getItem('image') && !localStorage.getItem('name'))
      navigate('/auth');

    dispatch(initializeTodos());
    const todoText = inputText.current;
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
    if (!inputText.current.value) {
      setErrorMsg('Text field is empty.');
    } else if (!inputDueDate.current.value) {
      setErrorMsg('Due date field is empty.');
    } else if (new Date(inputDueDate.current.value) - Date.now() < 0) {
      setErrorMsg(`Due date needs to be in future.`);
    } else {
      dispatch(
        addTodo({
          content: inputText.current.value,
          priority: inputPriority.current.value,
          dueDate: inputDueDate.current.value,
        })
      );
      inputText.current.value = '';
      inputPriority.current.value = 'Medium';
      inputDueDate.current.value = '';
      setErrorMsg(null);
    }
    setTimeout(() => {
      setErrorMsg(null);
    }, 2000);
  };

  return (
    localStorage.getItem('image') &&
    localStorage.getItem('name') && (
      <div>
        <Header />
        <StyledMain>
          <h2>Add Your Daily Tasks</h2>
          <form>
            <StyledFormDiv>
              <div>
                <label htmlFor="priority">Priority</label>
                <select
                  name="priority"
                  id="priority"
                  ref={inputPriority}
                  defaultValue={'Medium'}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
              <div>
                <label htmlFor="dueDate">Due date</label>
                <input
                  type="date"
                  name="dueDate"
                  id="dueDate"
                  ref={inputDueDate}
                />
              </div>
            </StyledFormDiv>
            <div>
              <input
                type="text"
                name="todo"
                id="todo"
                placeholder="my task"
                ref={inputText}
              />
              <input type="submit" value="Add" onClick={handleClick} />
            </div>
          </form>
          {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
          <Todos />
        </StyledMain>
      </div>
    )
  );
}

export default Main;
