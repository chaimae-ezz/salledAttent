import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// layouts
import MainLayout from 'layout/MainLayout';
import MinimalLayout from 'layout/MinimalLayout';
// pages
import LoginPage from 'views/pages/authentication/Login';
import RegisterPage from 'views/pages/authentication/Register';
import ResetPassword from 'views/pages/auth-forms/ResetPassword';
//import LoginSelection from 'views/pages/auth-forms/LoginSelection';

// import ForgotPasswordPage from 'views/pages/authentication/AuthpwdOublie';
import DashboardDefault from 'views/dashboard/Default';
import SamplePage from 'views/sample-page';
import AgentPage from '../views/agent-page';
import HomeQueue from 'views/acceuil-page';
import TestConnection from 'views/my-time-page';
import SessionPage from 'views/session-page'
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/" element={<MinimalLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="pages/login" element={<LoginPage />} />
          <Route path="pages/reset-password" element={<ResetPassword />} />
          <Route path="pages/register" element={<RegisterPage />} />
          {/* <Route path="pages/LoginSelection" element={<LoginSelection />} />/*}
          {/* <Route path="pages/forgot-password" element={<ForgotPasswordPage />} /> */}
        </Route>
        {/* Main Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard/default" element={<DashboardDefault />} />
          <Route path="sample-page" element={<SamplePage />} />
          <Route path="agent-page" element={<AgentPage />} />
          <Route path="acceuil-page" element={<HomeQueue />} />
          <Route path="session-page" element={<SessionPage />} />
          <Route path="my-time-page" element={<TestConnection />} />
        </Route>
        {/* Fallback (404) */}
        <Route path="*" element={<h1>404 - Page non trouvée</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;