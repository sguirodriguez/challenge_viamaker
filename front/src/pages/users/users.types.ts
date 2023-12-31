import { Id } from "react-toastify";

export type HandlersUsersTypes = {
    users: Array<{
        id: number;
        name: string;
        email: string;
        createdAt: string;
        updatedAt: string;
      }>;
      loading: boolean;
      userSelected: {
        id: number | null;
        name: string | null;
        email: string | null;
        createdAt: string | null;
        updatedAt: string | null;
      };
      setUserSelected: React.Dispatch<
        React.SetStateAction<{
          id: number | null;
          name: string | null;
          email: string | null;
          createdAt: string | null;
          updatedAt: string | null;
        }>
      >;
      modalType: string;
      setModalType: React.Dispatch<React.SetStateAction<string>>;
      name: string;
      setName: React.Dispatch<React.SetStateAction<string>>;
      email: string;
      setEmail: React.Dispatch<React.SetStateAction<string>>;
      handleCreateUser: () => Promise<Id | undefined | void>;
      handleUpdateUser: () => Promise<Id | undefined | void>;
      handleDeleteUser: (id: number) =>  Promise<Id | undefined | void>;
}