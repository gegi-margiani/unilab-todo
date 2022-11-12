import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PoppinsSemiBold from '../fonts/Poppins/Poppins-SemiBold.ttf';
import PoppinsLight from '../fonts/Poppins/Poppins-Light.ttf';
import { ReactComponent as PhotoLogo } from '../images/photo-icon.svg';

const StyledAuth = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledMainDiv = styled.div`
  @font-face {
    font-family: 'Poppins-SemiBold';
    src: url(${PoppinsSemiBold}) format('woff');
  }
  @font-face {
    font-family: 'Poppins-Light';
    src: url(${PoppinsLight}) format('woff');
  }
  width: 588px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin-top: 33px;
    margin-bottom: 44px;
    font: normal normal 600 48px/72px 'Poppins-SemiBold';
  }
  form {
    margin-bottom: 76px;
  }
  button {
    margin-bottom: 63px;
    width: 258px;
    height: 66px;
    background: #5efc8d 0% 0% no-repeat padding-box;
    border-radius: 4px;
    border: 0px;
    cursor: pointer;
    font: normal normal 300 32px/48px 'Poppins-Light';
    :hover {
      background: #000000 0% 0% no-repeat padding-box;
      color: white;
    }
  }
`;

const StyledFormDiv = styled.div`
  @font-face {
    font-family: 'Poppins-Light';
    src: url(${PoppinsLight}) format('woff');
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    margin-bottom: 16px;
    font: normal normal 300 22px/33px 'Poppins-Light';
  }
  :first-child {
    margin-bottom: 53px;
    label {
      margin-bottom: 10px;
    }
  }
  input[type='text'] {
    font: normal normal 300 22px/33px 'Poppins-Light';
    width: 439px;
    height: 76px;
    background: #e6ebff 0% 0% no-repeat padding-box;
    border: 0px;
    border-radius: 4px;
    padding-left: 24px;
    padding-right: 24px;
    ::placeholder {
      opacity: 0.2;
    }
  }
`;

const StyledFilePicker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 122px;
  height: 122px;
  background: #e6ebff 0% 0% no-repeat padding-box;
  :hover {
    background: #5efc8d 0% 0% no-repeat padding-box;
  }
`;

const StyledImage = styled.img`
  border-radius: 50%;
  width: 122px;
  height: 122px;
`;

function Auth() {
  const [isFilePicked, setIsFilePicked] = useState(false);
  const inputFilePicker = useRef(null);
  const inputName = useRef(null);
  const navigate = useNavigate();

  const handleFilePickerClick = () => {
    inputFilePicker.current.click();
  };

  const handleFilePickerChange = () => {
    const fr = new FileReader();
    fr.readAsDataURL(inputFilePicker.current.files[0]);
    fr.addEventListener('load', () => {
      localStorage.setItem('image', fr.result);
      setIsFilePicked(true);
    });
  };

  useEffect(() => {
    if (localStorage.getItem('image') && localStorage.getItem('name'))
      navigate('/main');
    if (localStorage.getItem('image')) setIsFilePicked(true);
  }, []);

  const redirectIfValid = (e) => {
    e.preventDefault();
    if (isFilePicked && inputName.current.value) {
      localStorage.setItem('name', inputName.current.value);
      navigate('/main');
    }
  };
  return (
    (!localStorage.getItem('name') || !localStorage.getItem('image')) && (
      <StyledAuth>
        <StyledMainDiv>
          <h2>Get Started</h2>
          <form>
            <StyledFormDiv>
              {!isFilePicked ? (
                <>
                  <label htmlFor="photo">Add a photo</label>
                  <StyledFilePicker onClick={handleFilePickerClick}>
                    <PhotoLogo />
                    <input
                      type="file"
                      name="photo"
                      id="photo"
                      hidden={true}
                      ref={inputFilePicker}
                      onChange={handleFilePickerChange}
                    />
                  </StyledFilePicker>
                </>
              ) : (
                <StyledImage
                  src={localStorage.getItem('image')}
                  alt="profile"
                />
              )}
            </StyledFormDiv>

            <StyledFormDiv>
              <label htmlFor="name">Fill in your name</label>
              <input
                type="text"
                name="name"
                id="name"
                ref={inputName}
                placeholder="your name"
              />
            </StyledFormDiv>
          </form>
          <button onClick={redirectIfValid}> Sign In</button>
        </StyledMainDiv>
      </StyledAuth>
    )
  );
}

export default Auth;
