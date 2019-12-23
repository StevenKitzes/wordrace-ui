import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { Action } from '../../types/global';
import { UserActions } from '../actions';

const initialState: RootState.UserState = {};

export const userReducer = handleActions<RootState.UserState>(
  {
    [UserActions.Type.ADD_USER]: (state: RootState.UserState, action: Action) => {
      if (action.payload && action.payload.name) {
        return {
          id: 123, // TODO: Generate UUID
          name: action.payload.name,
        };
      }
      return state;
    },
  },
  initialState
);