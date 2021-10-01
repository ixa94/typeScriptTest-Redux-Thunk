
  export interface TodoState{
    todo:any[];
    loading:boolean;
    error:null|string;
    page:number;
    limit:number
  }
export enum TodoActionTypes{
  FETSCH_TODOS='FETSCH_TODOS',
  FETSCH_TODOS_SUCCESS='FETSCH_TODOS_SUCCESS',
  FETSCH_TODOS_ERROR='FETSCH_TODOS_ERROR',
  SET_TODO_PAGE = 'SET_TODO_PAGE'
}

 interface FetchTodoAction{
  type:TodoActionTypes.FETSCH_TODOS
}
 interface FetchTodoSuccessAction{
  type:TodoActionTypes.FETSCH_TODOS_SUCCESS;
  payload:any[];
}
 interface FetchTodoErrorAction{
  type:TodoActionTypes.FETSCH_TODOS_ERROR;
  payload:string;
}

interface SetTodoPage{
  type:TodoActionTypes.SET_TODO_PAGE;
  payload:number;
}

export type TodoAction = FetchTodoAction| FetchTodoSuccessAction | FetchTodoErrorAction | SetTodoPage
