import { RootState } from './state';
import { combineReducers } from 'redux';
import { userReducer } from './user';

export { RootState };

export const rootReducer = combineReducers<RootState>({
  user: userReducer
});