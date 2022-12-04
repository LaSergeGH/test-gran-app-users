import { Reducer } from 'redux';

import { IUser } from '@store/types/store';
import {
  EActionsTypes,
  IActionAddUser,
  IActionDeleteUser,
  IActionGetUsers,
  IActionSetUsers,
} from '@store/types/actions';

type TActions =
  | IActionGetUsers
  | IActionSetUsers
  | IActionAddUser
  | IActionDeleteUser;

const initialState: IUser[] = [];

const usersReducer: Reducer<IUser[], TActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case EActionsTypes.ACTION_SET_USERS:
      return [...action.users];
    case EActionsTypes.ACTION_DELETE_USER:
      const { id } = action;
      return [...state.filter(({ id: userId }) => userId !== id)];
    default:
      return [...state];
  }
};

export default usersReducer;
