import React from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/layout';
import { MainLayout } from './components/mainPage/mainLayout';
import { AuthRouter } from './routes/authRouter';
import { Cv } from './pages/cv/cv';
import { PublicRoute } from './components/hoc/PublicRoute';
import { PrivateRoute } from './components/hoc/PrivateRoute';
import { Modal } from './pages/cv/modal/modal';
// import 'overlayscrollbars/styles/overlayscrollbars.min.css';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Cv />}>
          <Route path="/modal/*" element={<Modal />} />
        </Route>
        <Route path="/*" element={<AuthRouter />} />
      </Route>
    </Routes>
  );
};
