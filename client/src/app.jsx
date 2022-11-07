import React, { useState } from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation, useParams } from 'react-router-dom';
import { Layout } from './components/layout/layout';
import { MainLayout } from './components/mainPage/mainLayout';
import { AuthRouter } from './routes/authRouter';
import { Cv } from './pages/cv/cv';
import { PublicRoute } from './components/hoc/PublicRoute';
import { PrivateRoute } from './components/hoc/PrivateRoute';
import { Modal } from './pages/modal/modal';
import { ModalListWindow } from './pages/modal/components/modalListWindow/modalListWindow';
import { selectMenuFields } from './pages/modal/schema/selectMenuFields';

export const App = () => {
  const location = useLocation().pathname.split('/')[1];

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Cv />}>
            <Route path="modal" element={<Modal />}>
              <Route path={`:${location}`} element={<ModalListWindow path={location} />}>
                <Route path={`presentation`} element={<h1>{'hess'}</h1>} />
              </Route>
            </Route>
          </Route>
          <Route path="/*" element={<AuthRouter />} />
        </Route>
      </Routes>
    </>
  );
};
