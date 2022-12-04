import { IUser } from './store';
import {
  IActionGetUsers,
  IActionDeleteUser,
  IActionAddUser,
  IActionEditUser,
} from './actions';

export type TGetUsersActionCreator = () => IActionGetUsers;

export type TAddUserActionCreator = (user: IUser) => IActionAddUser;

export type TEditUserActionCreator = (user: IUser) => IActionEditUser;

export type TDeleteUserActionCreator = (id: string) => IActionDeleteUser;
