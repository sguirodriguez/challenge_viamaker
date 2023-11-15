import React, { useState, useEffect } from 'react';
import UsersScreen from './users.screen';
import request from '../../helpers/request';
import { toast } from 'react-toastify';
import { useModal } from '../../context/modal';
import { validateEmail } from '../../helpers/utils';

const UsersController = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userSelected, setUserSelected] = useState<{
    id: number | null;
    name: string | null;
    email: string | null;
    createdAt: string | null;
    updatedAt: string | null;
  }>({
    id: null,
    name: null,
    email: null,
    createdAt: null,
    updatedAt: null,
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [modalType, setModalType] = useState('create');
  const { closeModal } = useModal();

  const handleGetUsers = async () => {
    setLoading(true);
    const { data, error } = await request({
      method: 'GET',
      path: 'usuarios',
    });
    setLoading(false);

    if (error) {
      return toast.error(error);
    }

    setUsers(data);
  };

  const handleCreateUser = async () => {
    const isEmailValid = validateEmail(email);
    if (!name) {
      return toast.error('É necessário um nome!');
    }
    if (!email || !isEmailValid) {
      return toast.error('É necessário um email válido!');
    }

    setLoading(true);
    const { error } = await request({
      method: 'POST',
      path: 'usuarios',
      body: {
        name,
        email,
      },
    });
    setLoading(false);

    if (error) {
      return toast.error(error);
    }

    closeModal();
    await handleGetUsers();
  };

  const handleUpdateUser = async () => {
    const isEmailValid = validateEmail(email);
    if (!userSelected?.id) {
      return toast.error('É necessário selecionar um usuário!');
    }
    if (!name) {
      return toast.error('É necessário um nome!');
    }
    if (!email || !isEmailValid) {
      return toast.error('É necessário um email válido!');
    }

    setLoading(true);
    const { error } = await request({
      method: 'PUT',
      path: 'usuarios',
      body: {
        id: userSelected?.id,
        name,
        email,
      },
    });
    setLoading(false);

    if (error) {
      return toast.error(error);
    }
    closeModal();
    await handleGetUsers();
  };

  const handleDeleteUser = async (id: number) => {
    setLoading(true);
    const { error } = await request({
      method: 'DELETE',
      path: 'usuarios',
      body: {
        id,
      },
    });
    setLoading(false);

    if (error) {
      return toast.error(error);
    }

    await handleGetUsers();
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  const handlers = {
    users,
    loading,
    userSelected,
    setUserSelected,
    modalType,
    setModalType,
    name,
    setName,
    email,
    setEmail,
    handleCreateUser,
    handleUpdateUser,
    handleDeleteUser,
  };

  return <UsersScreen handlers={handlers} />;
};

export default UsersController;
