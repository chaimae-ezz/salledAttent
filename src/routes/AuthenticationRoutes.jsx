import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthLogin = Loadable(lazy(() => import('views/pages/auth-forms/AuthLogin')));
const ResetPassword = Loadable(lazy(() => import('views/pages/auth-forms/ResetPassword')));

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/pages/login',
      element: <AuthLogin />
    },
    {
      path: '/pages/reset-password',
      element: <ResetPassword />
    }
  ]
};

export default AuthenticationRoutes;
