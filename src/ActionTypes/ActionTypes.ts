
  export interface UserState{
    users:any[];
    loading:boolean;
    error:null|string
  }
export enum UserActionTypes{
  FETSCH_USERS='FETSCH_USERS',
  FETSCH_USERS_SUCCESS='FETSCH_USERS_SUCCESS',
  FETSCH_USERS_ERROR='FETSCH_USERS_ERROR'
}

 interface FetchUserAction{
  type:UserActionTypes.FETSCH_USERS
}
 interface FetchUserSuccessAction{
  type:UserActionTypes.FETSCH_USERS_SUCCESS;
  payload:any[];
}
 interface FetchUserErrorAction{
  type:UserActionTypes.FETSCH_USERS_ERROR;
  payload:string;
}

export type UserAction = FetchUserAction| FetchUserSuccessAction | FetchUserErrorAction
