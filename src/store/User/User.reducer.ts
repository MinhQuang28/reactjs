import { handleActions } from 'redux-actions';
import { BaseAction } from 'redux-actions';

interface ActionModel extends BaseAction {
  type: string;
  payload: any;
  error?: boolean;
  meta?: any;
}
interface UserModel {
  name?: string;

}
export interface UserReducerState {
  dataUser: UserModel;
  isLoadingUser: boolean;
  dataAddUser: any;
  isLoadingAddUser: boolean;
  dataEditUser: any;
  isLoadingEditUser: boolean;
  errorEdit: any;
  errorAdd: any;
  isLoadingDelete: any;
}

const initialState: UserReducerState = {
  dataUser: {} as UserModel,
  isLoadingUser: false,
  dataAddUser: {},
  isLoadingAddUser: false,
  dataEditUser: {},
  isLoadingEditUser: false,
  errorEdit: '',
  errorAdd: '',
  isLoadingDelete: '',
};

const UserReducer = handleActions<any, ActionModel>(
  {
    GET_USER_REQUESTED: state => {
      return {
        ...state,
        isLoadingUser: true,
        dataUser: null,
      };
    },

    GET_USER_SUCCEEDED: (state, action) => {
      return {
        ...state,
        dataUser: action.payload,
        isLoadingUser: false,
      };
    },

    GET_USER_FAILED: state => {
      return {
        ...state,
        isLoadingUser: false,
        dataUser: null,
      };
    },
   
  },
  initialState,
  { prefix: 'User' },
);

export default UserReducer;
