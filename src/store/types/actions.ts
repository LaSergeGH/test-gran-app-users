import { IUser } from './store';

export enum EActionsTypes {
  ACTION_GET_USERS = 'ACTION_GET_USERS',
  ACTION_SET_USERS = 'ACTION_SET_USERS',
  ACTION_ADD_USER = 'ACTION_ADD_USER',
  ACTION_EDIT_USER = 'ACTION_EDIT_USER',
  ACTION_DELETE_USER = 'ACTION_DELETE_USER',
}

export interface IActionGetUsers {
  type: EActionsTypes.ACTION_GET_USERS;
}

export interface IActionSetUsers {
  type: EActionsTypes.ACTION_SET_USERS;
  users: IUser[];
}

export interface IActionAddUser {
  type: EActionsTypes.ACTION_ADD_USER;
  user: IUser;
}

export interface IActionEditUser {
  type: EActionsTypes.ACTION_EDIT_USER;
  user: IUser;
}

export interface IActionDeleteUser {
  type: EActionsTypes.ACTION_DELETE_USER;
  id: string;
}
