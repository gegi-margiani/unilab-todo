import styled from 'styled-components';
import PoppinsLight from '../../assets/fonts/Poppins/Poppins-Light.ttf';

export const StyledTodo = styled.div`
  @font-face {
    font-family: 'Poppins-Light';
    src: url(${PoppinsLight}) format('woff');
  }
  display: flex;
  justify-content: space-between;
  width: 595px;
  background: #000000 0% 0% no-repeat padding-box;
  opacity: ${(props) => (props.isCompleted ? 0.2 : 1)};
  border-radius: 4px;
  min-height: 54px;
  margin-bottom: 16px;
  span {
    display: flex;
    align-items: center;
    margin-left: 24px;
    font: normal normal 300 22px/33px 'Poppins-Light';
    color: white;
  }
  & > div {
    display: flex;
  }
  & > div > div:first-child {
    margin-right: 6px;
  }
  @media only screen and (max-width: 600px) {
    width: 100vw;
  }
`;
export const StyledIconDiv = styled.div`
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 48px;
  :hover {
    cursor: pointer;
    background-color: green;
  }
`;
