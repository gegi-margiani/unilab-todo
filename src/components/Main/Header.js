import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PoppinsBlack from '../../fonts/Poppins/Poppins-Black.ttf';
import PoppinsLight from '../../fonts/Poppins/Poppins-Light.ttf';

const StyledHeader = styled.header`
  @font-face {
    font-family: 'Poppins-Light';
    src: url(${PoppinsLight}) format('woff');
  }
  @font-face {
    font-family: 'Poppins-Black';
    src: url(${PoppinsBlack}) format('woff');
  }
  height: 98px;
  padding: 0px 28px;
  background: #000000 0% 0% no-repeat padding-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font: normal normal 900 36px/55px 'Poppins-Black';
    color: white;
  }
`;
const StyledDiv = styled.div`
  display: flex;
  align-items: center;

  font: normal normal 300 22px/33px 'Poppins-Light';
  color: white;
`;

const StyledImage = styled.img`
  border-radius: 50%;
  width: 68px;
  height: 68px;
  margin-left: 20px;
`;

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
