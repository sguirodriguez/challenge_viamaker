import React from 'react';
import * as Style from './users.styles';
import { H2, H5 } from '@styles/text';
import Layout from '../../components/layout/layout.component';
import { colors } from '@styles/theme/colors';
import Button from '../../components/button/button.component';
import { FaRegEdit, FaRegTimesCircle, FaRegTrashAlt } from 'react-icons/fa';
import { Else, If, Then } from 'react-if';
import Spinner from '../../components/spinner';
import { useModal } from '../../context/modal';
import Input from '../../components/input/input.component';
import { HandlersUsersTypes } from './users.types';

const UsersScreen = ({ handlers }: { handlers: HandlersUsersTypes }) => {
  const { isOpen, closeModal, openModal } = useModal();
  const {
    users,
    loading,
    modalType,
    setModalType,
    setUserSelected,
    name,
    setName,
    email,
    setEmail,
    handleCreateUser,
    handleUpdateUser,
    handleDeleteUser,
  } = handlers;

  const translatorModalContent: { [key: string]: JSX.Element } = {
    createUser: (
      <>
        <div className="header">
          <div className="flex1 justify-left">
            <H2 color={colors.primaryDefault}>Adicionar Usuário</H2>
          </div>

          <div className="flex1 justify-center"></div>

          <div className="flex1 justify-right">
            <FaRegTimesCircle
              style={{ fontSize: 20, cursor: 'pointer' }}
              onClick={() => closeModal()}
            />
          </div>
        </div>

        <Input
          marginTop={30}
          placeholder="Nome"
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setName(event.target.value)
          }
        />

        <Input
          marginTop={10}
          placeholder="Email"
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />

        <div className="buttons">
          <Button
            text="Cancelar"
            style={{ width: '130px' }}
            onClick={() => {
              setModalType('createUser');
              closeModal();
            }}
          />

          <Button
            text="Adicionar"
            style={{ width: '130px' }}
            onClick={() => {
              setModalType('createUser');
              closeModal();
              handleCreateUser();
            }}
          />
        </div>
      </>
    ),
    updatedUser: (
      <>
        <div className="header">
          <div className="flex1 justify-left">
            <H2 color={colors.primaryDefault}>Alterar Usuário</H2>
          </div>

          <div className="flex1 justify-center"></div>

          <div className="flex1 justify-right">
            <FaRegTimesCircle
              style={{ fontSize: 20, cursor: 'pointer' }}
              onClick={() => closeModal()}
            />
          </div>
        </div>

        <Input
          marginTop={30}
          placeholder="Nome"
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setName(event.target.value)
          }
        />

        <Input
          marginTop={10}
          placeholder="Email"
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />

        <div className="buttons">
          <Button
            text="Cancelar"
            style={{ width: '130px' }}
            onClick={() => {
              setModalType('createUser');
              closeModal();
            }}
          />

          <Button
            text="Alterar"
            style={{ width: '110px' }}
            onClick={() => {
              setModalType('createUser');
              closeModal();
              handleUpdateUser();
            }}
          />
        </div>
      </>
    ),
  };

  return (
    <Layout>
      <If condition={loading}>
        <Then>
          <Spinner />
        </Then>
        <Else>
          <Style.Container>
            <Style.Row>
              <H2 color={colors.primaryDefault}>
                Lista de usuários disponíveis
              </H2>

              <Button
                text="Adicionar +"
                onClick={() => {
                  setModalType('createUser');
                  setUserSelected({
                    id: null,
                    name: null,
                    email: null,
                    createdAt: null,
                    updatedAt: null,
                  });
                  setName('');
                  setEmail('');
                  openModal();
                }}
              />
            </Style.Row>

            {users?.map((item, index) => (
              <Style.UserItem key={item?.email + index}>
                <div className="left">
                  <H5>{item?.name}</H5>
                </div>

                <div className="right">
                  <a
                    onClick={() => {
                      setModalType('updatedUser');
                      setUserSelected(item);
                      setName(item?.name);
                      setEmail(item?.email);
                      openModal();
                    }}
                  >
                    <FaRegEdit
                      style={{ fontSize: 22, color: colors.primary }}
                    />
                  </a>

                  <a onClick={() => handleDeleteUser(item?.id)}>
                    <FaRegTrashAlt
                      style={{ fontSize: 22, color: colors.primary }}
                    />
                  </a>
                </div>
              </Style.UserItem>
            ))}
          </Style.Container>
        </Else>
      </If>

      <Style.ModalWrapper isOpen={isOpen}>
        <Style.ModalContent>
          {translatorModalContent?.[modalType]}
        </Style.ModalContent>
      </Style.ModalWrapper>
    </Layout>
  );
};

export default UsersScreen;
