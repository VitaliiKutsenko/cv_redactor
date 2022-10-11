import styled from 'styled-components';

export const RegistrationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(to left, #07475b, rgb(32, 31, 31));

  & form {
    position: relative;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    flex-shrink: 1;
    margin: 20px;
  }

  & form input {
    width: 200px;
    margin: 10px 0;
  }
  & form button {
    //transform: translateY(100px);
    //position: absolute;
    bottom: -50px;
  }
  .navigate-wrapper {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }

  .navigate-wrapper button {
    width: fit-content;
    //height: auto;
  }
`;
