import React, { useState } from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation, useParams } from 'react-router-dom';
import { Layout } from './pages/layout/layout';
import { AuthRouter } from './routes/authRouter';
import { Cv } from './pages/cv/cv';
import { PublicRoute } from './components/hoc/PublicRoute';
import { PrivateRoute } from './components/hoc/PrivateRoute';
import { Modal } from './pages/modal/modal';
import { ModalListWindow } from './pages/modal/components/modalListWindow/modalListWindow';
import { ModalRouter } from './routes/modalRouter';

export const App = () => {
  const location = useLocation().pathname.split('/')[1];

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Cv />}>
            <Route path="modal/*" element={<ModalRouter />}>
              {/*<Route path="modal/*" element={<Modal />}>*/}
              {/*<Route path={`:${location}`} element={<ModalListWindow path={location} />}></Route>*/}
            </Route>
            <Route path="auth/*" element={<AuthRouter />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
