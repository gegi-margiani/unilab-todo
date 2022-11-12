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
  form > input[type='text'] {
    padding-left: 24px;
    padding-right: 24px;
    width: 439px;
    height: 76px;
    background: #e6ebff 0% 0% no-repeat padding-box;
    border-radius: 4px;
    border: 0px;
    font: normal normal 300 22px/33px 'Poppins-Light';
    ::placeholder {
      opacity: 0.2;
    }
  }
  form > input[type='button'] {
    width: 108px;
    height: 78px;
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
    form {
      display: flex;
      width: 100vw;
      margin-bottom: 51px;
      margin-top: 27px;
    }
    form > input[type='text'] {
      width: 70vw;
      height: 60px;
      padding: 0px calc(10vw / 2) 0px;
    }
    form > input[type='button'] {
      width: 20vw;
      height: 62px;
      font-size: 1.6em;
    }
  }
`;
