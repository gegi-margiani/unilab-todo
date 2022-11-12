import styled from 'styled-components';
import PoppinsSemiBold from '../../assets/fonts/Poppins/Poppins-SemiBold.ttf';
import PoppinsLight from '../../assets/fonts/Poppins/Poppins-Light.ttf';

export const StyledAuth = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledMainDiv = styled.div`
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
  input[type='submit'] {
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
  @media only screen and (max-width: 600px) {
    width: 100vw;
    height: 100vh;
    h2 {
      margin-top: 1.5em;
      margin-bottom: 0.5em;
    }
    form {
      margin-bottom: 2.5em;
    }
    input[type='submit'] {
      font-size: 1.6em;
      width: 5em;
      height: 2.3em;
    }
  }
  @media only screen and (min-width: 601px) and (max-width: 1000px) {
    width: 70vw;

    input[type='submit'] {
      font-size: 1.6em;
      width: 7em;
      height: 2.5em;
    }
  }
`;

export const StyledFormDiv = styled.div`
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
  @media only screen and (max-width: 600px) {
    input[type='text'] {
      width: calc(100vw - 5em);
      height: 3em;
      font-size: 20px;
      padding-left: 1em;
      padding-right: 1em;
    }
    :first-child {
      margin-bottom: 1.5em;
    }
  }
  @media only screen and (min-width: 601px) and (max-width: 1000px) {
    input[type='text'] {
      width: calc(70vw - 10em);
      height: 3em;
      font-size: 20px;
      padding-left: 1em;
      padding-right: 1em;
    }
  }
`;
export const StyledFilePicker = styled.div`
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

export const StyledImage = styled.img`
  border-radius: 50%;
  width: 122px;
  height: 122px;
`;
