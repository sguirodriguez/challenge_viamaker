import React from 'react';
import * as Style from './users.styles';
import { H2, H5 } from '@styles/text';
import Layout from '../../components/layout/layout.component';
import { colors } from '@styles/theme/colors';
import Button from '../../components/button/button.component';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

const UsersScreen = ({ handlers }: { handlers: any }) => {
  const {} = handlers;

  return (
    <Layout>
      <Style.Container>
        <Style.Row>
          <H2 color={colors.primaryDefault}>Lista de usuários disponíveis</H2>

          <Button text="Adicionar +" />
        </Style.Row>

        <Style.UserItem>
          <div className="left">
            <H5>Samuel Guilherme Ribeiro Rodrigues</H5>
          </div>

          <div className="right">
            <a>
              <FaRegEdit style={{ fontSize: 22, color: colors.primary }} />
            </a>

            <a>
              <FaRegTrashAlt style={{ fontSize: 22, color: colors.primary }} />
            </a>
          </div>
        </Style.UserItem>
      </Style.Container>
    </Layout>
  );
};

export default UsersScreen;
