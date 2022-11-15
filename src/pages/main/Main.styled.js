import styled from 'styled-components';
import PoppinsSemiBold from '../../assets/fonts/Poppins/Poppins-SemiBold.ttf';
import PoppinsLight from '../../assets/fonts/Poppins/Poppins-Light.ttf';

export const StyledMain = styled.main`
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

  h2 {
    margin-top: 35px;
    font: normal normal 600 42px/63px 'Poppins-SemiBold';
  }
  form {
    display: flex;
    margin-bottom: 51px;
    margin-top: 27px;
  }
  form > div:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  form > div > input[type='text'] {
    padding: 1px 24px;
    width: 37vw;
    padding: 0px calc(10vw / 2) 0px;
    max-width: 439px;
    height: 76px;
    background: #e6ebff 0% 0% no-repeat padding-box;
    border-radius: 4px;
    border: 0px;
    font: normal normal 300 22px/33px 'Poppins-Light';
    ::placeholder {
      opacity: 0.2;
    }
  }
  form > div > input[type='submit'] {
    width: 20vw;
    max-width: 108px;
    height: 78px;
    padding: 0px 24px;
    background: #5efc8d 0% 0% no-repeat padding-box;
    border-radius: 4px;
    border: 0px;
    font: normal normal 300 32px/48px 'Poppins-Light';
    :hover {
      background: #000000 0% 0% no-repeat padding-box;
      color: white;
    }
  }
  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 2em;
      overflow-wrap: break-word;
    }
    form > div:last-child {
      display: flex;
      width: 78vw;
      min-height: max-content;
    }
    form > div > input[type='text'] {
      width: 48vw;
      min-height: 100%;
      padding: 0px calc(10vw / 2) 0px;
      height: 60px;
    }
    form > div > input[type='submit'] {
      width: 20vw;
      min-height: 100%;
      padding: 0px;
      height: 62px;
      font-size: 1.6em;
    }
  }
`;
export const ErrorMsg = styled.div`
  @font-face {
    font-family: 'Poppins-Light';
    src: url(${PoppinsLight}) format('woff');
  }
  position: relative;
  top: -2em;
  font-family: 'Poppins-Light';
  color: red;
`;
export const StyledFormDiv = styled.div`
  display: flex;
  div > label {
    display: block;
    text-align: center;
    font-family: 'Poppins-Light';
    border: 1px solid black;
    border-bottom: 0px;
    border-radius: 3px;
  }
  div {
    display: flex;
    max-width: 30vw;
    flex-direction: column;
  }
  div > input {
    height: 100%;
    font-family: 'Poppins-Light';
  }
  div > select {
    height: 100%;
    font-family: 'Poppins-Light';
    text-align: center;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 22vw;
  }
`;
