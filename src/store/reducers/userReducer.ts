import { UserAction, UserActionTypes, UserState } from "../../ActionTypes/ActionTypes"



const initialState:UserState={
  users:[],
  loading:false,
  error:null
}

export const  userReducer=(state = initialState,action:UserAction):UserState=>{
    switch(action.type){
        case UserActionTypes.FETSCH_USERS:
          return {loading:true,error:null,users:[]}
        case UserActionTypes.FETSCH_USERS_SUCCESS:
          return {loading:false,error:null,users:action.payload}
        case UserActionTypes.FETSCH_USERS_ERROR:
          return {loading:false,error:action.payload,users:[]}
        default:
            return state
}
}
