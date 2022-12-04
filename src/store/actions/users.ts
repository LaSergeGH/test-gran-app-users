import { EActionsTypes } from '@store/types/actions';
import { IUser } from '@store/types/store';
import { TGetUsersActionCreator } from '@store/types/actionCreators';

export const actionGetUsers: TGetUsersActionCreator = () => {
  return {
    type: EActionsTypes.ACTION_GET_USERS,
  };
};

export const actionSetUsers = (users: IUser[]) => {
  return {
    type: EActionsTypes.ACTION_SET_USERS,
    users,
  };
};

export const actionAddUser = (user: IUser) => {
  return {
    type: EActionsTypes.ACTION_ADD_USER,
    user,
  };
};

export const actionEditUser = (user: IUser) => {
  return {
    type: EActionsTypes.ACTION_EDIT_USER,
    user,
  };
};

export const actionDeleteUser = (id: string) => {
  return {
    type: EActionsTypes.ACTION_DELETE_USER,
    id,
  };
};
