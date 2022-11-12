import React from 'react';
import { useSelector } from 'react-redux';
import { StyledDiv, StyledHeader, StyledImage } from './StyledHeader';

function Header() {
  const { completedTodos, totalTodos } = useSelector(({ todos }) => todos);
  return (
    <StyledHeader>
      <h2>TO DO</h2>
      <StyledDiv>
        {totalTodos !== 0 && `${completedTodos}/${totalTodos} Completed`}
      </StyledDiv>
      <StyledDiv>
        <span>{localStorage.getItem('name')}</span>
        <StyledImage src={localStorage.getItem('image')} alt="profile" />
      </StyledDiv>
    </StyledHeader>
  );
}

export default Header;
