import { Reducer } from 'redux';

import IStore, { IUser } from '@store/types/store';
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

const initialState: IStore = {
  users: [],
};

const usersReducer: Reducer<IStore, TActions> = (
  state = initialState as IStore,
  action
) => {
  switch (action.type) {
    case EActionsTypes.ACTION_SET_USERS:
      // return [...action.users];
      return {
        ...state,
        users: [...action.users],
      };
    case EActionsTypes.ACTION_DELETE_USER:
      const { id } = action;
      // return [...state.filter(({ id: userId }) => userId !== id)];
      return {
        ...state,
        users: [...state.users.filter(({ id: userId }) => userId !== id)],
      };
    default:
      return { ...state };
  }
};

export default usersReducer;
