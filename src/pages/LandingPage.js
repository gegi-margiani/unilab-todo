import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as TodoLogo } from '../assets/images/todo-logo.svg';
import styled from 'styled-components';
import PoppinsSemiBold from '../assets/fonts/Poppins/Poppins-SemiBold.ttf';
import PoppinsLight from '../assets/fonts/Poppins/Poppins-Light.ttf';
import PoppinsBlack from '../assets/fonts/Poppins/Poppins-Black.ttf';

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
    margin: 46px 3em 149px;
    text-align: center;
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
  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 2em;
      overflow-wrap: break-word;
      margin: 0.5em;
      text-align: center;
      line-height: 1.5em;
    }
    button {
      font-size: 2em;
      width: 8em;
    }
  }
  @media only screen and (min-width: 601px) and (max-width: 1000px) {
    h1 {
      font-size: 2.5em;
      overflow-wrap: break-word;
      margin: 2.5em;
      text-align: center;
      line-height: 1.5em;
    }
    button {
      font-size: 2em;
      width: 10em;
    }
  }
`;
const StyledLogo = styled(TodoLogo)`
  @font-face {
    font-family: 'Poppins-Black';
    src: url(${PoppinsBlack}) format('woff');
  }
  @media only screen and (max-width: 600px) {
    width: 5em;
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
