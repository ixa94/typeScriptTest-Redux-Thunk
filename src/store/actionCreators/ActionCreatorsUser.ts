import axios from "axios"
import { Dispatch } from "redux"
import { UserAction,UserActionTypes } from "../../ActionTypes/ActionTypes"



export const fetchUsers = () =>{
  return async (dispatch:Dispatch<UserAction>)=>{
    try {
      dispatch({type:UserActionTypes.FETSCH_USERS})
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch({type:UserActionTypes.FETSCH_USERS_SUCCESS,payload:res.data})
    } catch (error) {
      dispatch({
        type:UserActionTypes.FETSCH_USERS_ERROR,
        payload:'Error'})
    }
  }
}
