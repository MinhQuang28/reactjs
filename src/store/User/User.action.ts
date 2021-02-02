import { createActions } from 'redux-actions';

export interface QueryString {
  name?: string;
  pass?: number;

}
interface UserModel {
  name?: string;

}

export const {
  getUserRequested,
  getUserSucceeded,
  getUserFailed,
} = createActions(
  {
    GET_USER_REQUESTED: (payload: QueryString) => payload,
    GET_USER_SUCCEEDED: (payload: UserModel) => payload,
    GET_USER_FAILED: (error: any) => error,
  },
  {
    prefix: 'user',
  },
);
