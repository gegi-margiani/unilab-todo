import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StyledDiv, StyledLandingPage, StyledLogo } from './LandingPage.styled';

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
