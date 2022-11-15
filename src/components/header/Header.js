import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearTodos } from '../../reducers/todos';
import { StyledDiv, StyledHeader, StyledImage } from './Header.styled';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { completedTodos, totalTodos } = useSelector(({ todos }) => todos);
  return (
    <StyledHeader>
      <h2>TO DO</h2>
      <StyledDiv>
        {totalTodos !== 0 && `${completedTodos}/${totalTodos} Completed`}
      </StyledDiv>
      <StyledDiv>
        <div>
          <div>{localStorage.getItem('name')}</div>
          <button
            onClick={() => {
              dispatch(clearTodos());
              navigate('/');
            }}
          >
            log out
          </button>
        </div>
        <StyledImage src={localStorage.getItem('image')} alt="profile" />
      </StyledDiv>
    </StyledHeader>
  );
}

export default Header;
