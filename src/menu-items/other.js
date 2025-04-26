// assets
import { IconHome, IconBuilding, IconUsers, IconTicket, IconClock } from '@tabler/icons-react';

// constant
const icons = { IconHome, IconBuilding, IconUsers, IconTicket, IconClock };

// ==============================|| ÉLÉMENTS DU MENU DE LA PAGE ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'session-page',
      title: 'Traiter Tickets',
      type: 'item',
      url: '/session-page',
      icon: icons.IconTicket, // Icône pour les tickets
      breadcrumbs: false
    },
    {
      id: 'acceuil-page',
      title: 'Accueil',
      type: 'item',
      url: '/acceuil-page',
      icon: icons.IconHome,
      breadcrumbs: false
    },
    {
      id: 'my-time-page',
      title: 'My Time',
      type: 'item',
      url: '/my-time-page',
      icon: icons.IconClock, // Icône pour la gestion du temps
      breadcrumbs: false
    },
    {
      id: 'sample-page',
      title: 'Gérer Services',
      type: 'item',
      url: '/sample-page',
      icon: icons.IconBuilding,
      breadcrumbs: false
    },
    {
      id: 'agent-page',
      title: 'Gérer Agents',
      type: 'item',
      url: '/agent-page',
      icon: icons.IconUsers,
      breadcrumbs: false
    }
  ]
};

export default other;
