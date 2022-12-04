import client from '../client';
import { IUser } from '@store/types/store';

const UsersServices = {
  getUsers: () => {
    return client.get('/users', {});
  },

  addUser: (user: IUser) => {
    return client.post('/add-user', user);
  },

  editUser: (user: IUser) => {
    return client.patch('/edit-user', user);
  },

  deleteUser: (id: string) => {
    return client.delete(`/delete-user`, {
      params: {
        id,
      },
    });
  },
};

export default UsersServices;
