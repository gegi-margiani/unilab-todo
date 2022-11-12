import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as TodoLogo } from '../images/todo-logo.svg';
import styled from 'styled-components';
import PoppinsSemiBold from '../fonts/Poppins/Poppins-SemiBold.ttf';
import PoppinsLight from '../fonts/Poppins/Poppins-Light.ttf';
import PoppinsBlack from '../fonts/Poppins/Poppins-Black.ttf';

const StyledLandingPage = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledDiv = styled.div`
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
  h1 {
    margin-top: 46px;
    margin-bottom: 149px;
    color: white;
    font: normal normal 600 54px/81px 'Poppins-SemiBold';
  }
  button {
    width: 388px;
    height: 98px;
    background: #5efc8d 0% 0% no-repeat padding-box;
    border: 0px;
    border-radius: 4px;
    opacity: 1;
    font: normal normal 300 48px/72px 'Poppins-Light';
    :hover {
      background-color: white;
      cursor: pointer;
    }
  }
`;
const StyledLogo = styled(TodoLogo)`
  @font-face {
    font-family: 'Poppins-Black';
    src: url(${PoppinsBlack}) format('woff');
  }
`;

function LandingPage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('image') && localStorage.getItem('name'))
      navigate('/main');
  }, []);
  return (
    (!localStorage.getItem('name') || !localStorage.getItem('image')) && (
      <StyledLandingPage>
        <StyledDiv>
          <StyledLogo />
          <h1>Keep Track Of Daily Tasks In Life</h1>
          <Link to="/auth">
            <button> Get Started</button>
          </Link>
        </StyledDiv>
      </StyledLandingPage>
    )
  );
}

export default LandingPage;
