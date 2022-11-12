import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as PhotoLogo } from '../../assets/images/photo-icon.svg';
import {
  StyledAuth,
  StyledFilePicker,
  StyledFormDiv,
  StyledImage,
  StyledMainDiv,
} from './StyledAuth';

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

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') redirectIfValid(e);
    });
    return () => {
      window.removeEventListener('keydown', (e) => {
        if (e.key === 'Enter') redirectIfValid(e);
      });
    };
  }, [isFilePicked]);

  const redirectIfValid = (e) => {
    e.preventDefault();
    if (isFilePicked && inputName.current && inputName.current.value) {
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
          <button onClick={redirectIfValid}>Sign In</button>
        </StyledMainDiv>
      </StyledAuth>
    )
  );
}

export default Auth;
