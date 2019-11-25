import { User } from '../../models/user';

export interface RootState {
  user: RootState.UserState;
}

export namespace RootState {
  export type UserState = User | {};
}