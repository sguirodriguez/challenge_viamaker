import { colors } from '@styles/theme/colors';
import { BsPerson, BsGrid, BsBoxSeam } from 'react-icons/bs';

export const sidebarMenuMock = [
  {
    title: 'Início',
    icon: <BsGrid style={{ color: colors.primary, fontSize: 19 }} />,
    routePath: '/dashboard',
  },
  {
    title: 'Produtos',
    icon: <BsBoxSeam style={{ color: colors.primary, fontSize: 20 }} />,
    routePath: '/dashboard/produtos',
  },
  {
    title: 'Usuários',
    icon: <BsPerson style={{ color: colors.primary, fontSize: 19 }} />,
    routePath: '/dashboard/usuarios',
  },
];
