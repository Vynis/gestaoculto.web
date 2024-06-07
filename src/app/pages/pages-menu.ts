import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'layout-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Escala do Culto',
    icon: 'arrow-circle-right-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'Cadastros',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Pessoas',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Ministérios',
        link: '/pages/forms/layouts',
      }
    ],
  },
  {
    title: 'Configuração',
    icon: 'options-2-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Usuários',
        link: '/pages/ui-features/grid',
      }
    ],
  },
  {
    title: 'Relatórios',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Pessoas',
        link: '/pages/modal-overlays/dialog',
      }
    ],
  },
];
