import React, { useCallback } from 'react';
import { Link, Route, Routes, useHistory, useNavigate, useParams } from 'react-router-dom';
import { PublicRoute } from '../components/hoc/PublicRoute';
import { Registration } from '../pages/auth/registration/registration';
import { SignIn } from '../pages/auth/signIn/signIn';
import { ResetPassword } from '../pages/auth/resetPassword/resetPassword';
import { AuthRouterWrapper } from './authRouterStyled';
import SelectArrow from './../../public/svg_modal/SelectArrow.svg';
import { CustomLink } from '../components/navLinks/customLink';

export const AuthRouter = () => {
  const navigateToBack = useNavigate();

  const param = useParams()['*'];
  const handleGoBackButton = useCallback(() => {
    if (param !== 'sign-in') {
      navigateToBack('sign-in');
    }
  }, [param]);

  const routes = [
    {
      path: 'sign-in',
      Component: <SignIn />,
    },
    {
      path: 'registration',
      Component: <Registration />,
    },
    {
      path: 'forgot-password',
      Component: <ResetPassword />,
    },
  ];

  return (
    <AuthRouterWrapper>
      <div className="auth_modal">
        <div className="auth_modal__header">
          <button className="auth_modal__buttonGoBack" onClick={handleGoBackButton}>
            {<SelectArrow />}
          </button>
          <CustomLink color="white" to="/auth/registration">
            Registration
          </CustomLink>
        </div>
        <div className="auth_modal__body">
          <Routes>
            {routes.map(({ path, Component }) => {
              return (
                <Route key={path} path={path} element={<PublicRoute>{Component}</PublicRoute>} />
              );
            })}
          </Routes>
        </div>
      </div>
    </AuthRouterWrapper>
  );
};
