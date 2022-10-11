import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const LogOutModal = styled.div`
  position: absolute;
  right: 0;
  top: 50px;

  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.55);
  width: 100%;
  border-radius: 5px;

  && .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  && .container div {
    margin: 5px;
    padding: 5px;
    border-bottom-color: white;
    border-radius: 5px;
  }
  && .container div:nth-child(2) {
    background: tomato;
  }
`;

export const Logout = ({ logoutFn }) => {
  const [logout, setLogout] = useState(false);
  const [timer, setTimer] = useState(5);
  const ref = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    if (logout) {
      ref.current = setInterval(() => {
        setTimer(prev => {
          if (prev >= 1) {
            return prev - 1;
          }

          clearInterval(ref.current);

          return prev;
        });
      }, 1000);
    }

    return () => clearInterval(ref.current);
  }, [logout, ref]);

  useEffect(() => {
    if (!timer) {
      localStorage.removeItem('access_token');
    }
  }, [timer]);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.background = `linear-gradient(to left, green ${timer * 20}%,grey -100%)`;
    }
  }, [buttonRef, timer]);

  const handleConfirm = e => {
    e.stopPropagation();
    setLogout(true);
  };

  const handleCancel = e => {
    e.stopPropagation();

    if (logout) {
      setTimer(5);
      setLogout(false);
      clearTimeout(ref.current);
    }

    logoutFn(prev => !prev);
  };

  return (
    <LogOutModal>
      <div className="container">
        {!!timer && (
          <>
            <div ref={buttonRef} onClick={e => handleConfirm(e)}>
              Confirm
            </div>
            <div onClick={e => handleCancel(e)}>Cancel</div>
          </>
        )}
      </div>
    </LogOutModal>
  );
};
