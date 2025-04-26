// assets
import { IconDashboard } from '@tabler/icons-react';

// constante
const icons = { IconDashboard };

// ==============================|| ÉLÉMENTS DU MENU DU TABLEAU DE BORD ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Tableau de bord',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Tableau de bord',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
