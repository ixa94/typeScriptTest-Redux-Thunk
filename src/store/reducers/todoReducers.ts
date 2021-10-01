import { TodoAction, TodoActionTypes, TodoState } from "../../ActionTypes/todoActionTypes";


const initialState:TodoState={
  todo:[],
  page:1,
  error:null,
  limit:10,
  loading:false
}


export const todoReducer=(state=initialState,action:TodoAction):TodoState=>{
switch(action.type){
      case TodoActionTypes.FETSCH_TODOS:
          return{...state,loading:true}
      case TodoActionTypes.FETSCH_TODOS_SUCCESS:
          return{...state,loading:false,todo:action.payload}
      case TodoActionTypes.FETSCH_TODOS_ERROR:
          return{...state,loading:false,error:action.payload}
      case TodoActionTypes.SET_TODO_PAGE:
          return{...state,page:action.payload}

  default:
      return state
}
}
