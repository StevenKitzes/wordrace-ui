import { createAction } from 'redux-actions';
import { User } from '../../models/user';
import { PartialPick } from '../../types/global';

export namespace UserActions {
  export enum Type {
    ADD_USER = 'ADD_USER',
    DELETE_USER = 'DELETE_USER'
  }

  export const addUser = createAction<PartialPick<User, 'name'>>(Type.ADD_USER);
  export const deleteUser = createAction<User['id']>(Type.DELETE_USER);
}