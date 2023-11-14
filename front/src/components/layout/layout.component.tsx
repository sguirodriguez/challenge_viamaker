import React, { ReactNode } from 'react';
import Header from '../../components/header';
import SidebarMenu from '../../components/sidebarMenu';
import { Container, MenuAndMain, Main, Children } from './styles';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <MenuAndMain>
        <SidebarMenu />

        <Main>
          <Header />
          <Children>{children}</Children>
        </Main>
      </MenuAndMain>
    </Container>
  );
};

export default Layout;
