import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

//sample page acceuil
const HomeQueue = Loadable(lazy(() => import('views/acceuil-page')));

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// sample page routing
const AgentPage = Loadable(lazy(() => import('views/agent-page')));

const TestConnection = Loadable(lazy(() => import('views/my-time-page')));

// session page routing
const SessionPage = Loadable(lazy(() => import('views/session-page')));

// sample page acceuil
// const HomeQueue = Loadable(lazy(() => import('views/acceuil-page')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: '/acceuil-page',
      element: <HomeQueue />
    },
    {
      path: '/sample-page',
      element: <SamplePage />
    },
    {
      path: '/session-page',
      element: <SessionPage />
    },

    {
      path: '/my-time-page',
      element: <TestConnection />
    },
    {
      path: '/agent-page',
      element: <AgentPage />
    }
  ]
};

export default MainRoutes;
