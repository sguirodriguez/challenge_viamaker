import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import { useLocation } from 'react-router-dom';
import { H1 } from '@styles/text';
import { colors } from '@styles/theme/colors';
import MenuMobile from './components/menuMobile';

function Header() {
  const [pagePathname, setPagePathname] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const pathname = location?.pathname;
    if (pathname) {
      setPagePathname(pathname);

      document.title = `Desafio - ${pathname ? translator[pathname] : ''}`;
    }
  }, [location]);

  const translator: { [key: string]: string } = {
    '/dashboard': 'Início',
    '/dashboard/produtos': 'Produtos',
    '/dashboard/usuarios': 'Usuários',
  };

  return (
    <Container>
      <div className="show-on-768">
        <MenuMobile />
      </div>
      <H1 color={colors.primary} fontWeight={700}>
        {pagePathname ? translator[pagePathname] : ''}
      </H1>

      <div className="show-on-768" />
    </Container>
  );
}

export default Header;
