import { takeEvery, call, put, StrictEffect } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import {
  EActionsTypes,
  IActionGetUsers,
  IActionSetUsers,
  IActionAddUser,
  IActionEditUser,
  IActionDeleteUser,
} from '@store/types/actions';
import UsersServices from '@api/services/usersServices';

const { getUsers, addUser, editUser, deleteUser } = UsersServices;

// watcher
function* usersSaga(): Generator<StrictEffect> {
  yield takeEvery(EActionsTypes.ACTION_GET_USERS, getUsersWorker);
  yield takeEvery(EActionsTypes.ACTION_ADD_USER, addUserWorker);
  yield takeEvery(EActionsTypes.ACTION_EDIT_USER, editUserWorker);
  yield takeEvery(EActionsTypes.ACTION_DELETE_USER, deleteUserWorker);
}

// workers
function* getUsersWorker() {
  try {
    const response: AxiosResponse = yield call(getUsers);

    switch (response.status) {
      case 200:
        yield put({
          type: EActionsTypes.ACTION_SET_USERS,
          users: response.data,
        } as IActionSetUsers);
        break;
      case 400:
        yield put({
          type: EActionsTypes.ACTION_SET_USERS,
          users: [],
        } as IActionSetUsers);
    }
  } catch (error) {}
}

function* addUserWorker({ user }: IActionAddUser) {
  try {
    const response: AxiosResponse = yield call(addUser, user);

    switch (response.status) {
      case 200:
        yield put({
          type: EActionsTypes.ACTION_GET_USERS,
        } as IActionGetUsers);
    }
  } catch (error) {}
}

function* editUserWorker({ user }: IActionEditUser) {
  try {
    const response: AxiosResponse = yield call(editUser, user);

    switch (response.status) {
      case 200:
        yield put({
          type: EActionsTypes.ACTION_GET_USERS,
        } as IActionGetUsers);
    }
  } catch (error) {}
}

function* deleteUserWorker({ id }: IActionDeleteUser) {
  try {
    const response: AxiosResponse = yield call(deleteUser, id);

    switch (response.status) {
      case 200:
        yield put({
          type: EActionsTypes.ACTION_GET_USERS,
        } as IActionGetUsers);
    }
  } catch (error) {}
}

export default usersSaga;
