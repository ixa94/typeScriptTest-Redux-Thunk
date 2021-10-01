import axios from "axios"
import { Dispatch } from "redux"
import { TodoAction, TodoActionTypes } from "../../ActionTypes/todoActionTypes"




export const fetchTodo = (page =1,limit=10) =>{
  return async (dispatch:Dispatch<TodoAction>)=>{
    try {
      dispatch({type:TodoActionTypes.FETSCH_TODOS})
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos',{
          params:{_page:page,_lmit:limit}
        })
        dispatch({type:TodoActionTypes.FETSCH_TODOS_SUCCESS,payload:res.data})
    } catch (error) {
      dispatch({
        type:TodoActionTypes.FETSCH_TODOS_ERROR,
        payload:'Error'})
    }
  }
}



export function setTodoPage(page:number):TodoAction{
  return{type:TodoActionTypes.SET_TODO_PAGE,payload:page}
}
