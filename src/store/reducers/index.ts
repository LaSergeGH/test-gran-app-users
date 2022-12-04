import { combineReducers } from '@reduxjs/toolkit';

import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  users: usersReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
