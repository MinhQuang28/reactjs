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