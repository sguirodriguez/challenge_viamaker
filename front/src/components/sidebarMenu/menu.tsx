import { colors } from '@styles/theme/colors';
import { BsMap, BsGrid, BsSignTurnSlightRight } from 'react-icons/bs';

export const sidebarMenuMock = [
  {
    title: 'Início',
    icon: <BsGrid style={{ color: colors.primary, fontSize: 19 }} />,
    routePath: '/dashboard',
  },
  {
    title: 'Produtos',
    icon: (
      <BsSignTurnSlightRight style={{ color: colors.primary, fontSize: 20 }} />
    ),
    routePath: '/dashboard/produtos',
  },
  {
    title: 'Usuários',
    icon: <BsMap style={{ color: colors.primary, fontSize: 19 }} />,
    routePath: '/dashboard/usuarios',
  },
];
