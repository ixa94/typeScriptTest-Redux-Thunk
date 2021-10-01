import React, { FC, useEffect } from 'react';
import { useAction } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/usedTypedSelector';
import { fetchUsers } from '../store/actionCreators/ActionCreatorsUser';

const TodoList: FC = () => {
  const{todo,error,limit,loading,page} = useTypedSelector(state=>state.todo)
  const{fetchTodo,setTodoPage} = useAction()
  const pages = [1,2,3,4,5,6,7,8,9,10]
  useEffect(()=>{
    fetchTodo(page,limit)
  },[page])

  if (loading) {
    return <h1>Loadingg.....</h1>
  }

  if (error) {
    return <h1>Error.....</h1>
  }
  return (
    <div>
      {todo.map(todo=>
        <div key={todo.id}> {todo.id}-{todo.title}</div>)}
        <div style={{display:"flex"}}>
        {pages.map(p=>
        <div
        onClick={()=>setTodoPage(p)}
         style={{border:p=== page?'2px solid green':'1px solid gray', padding:10}}>
          {p}
        </div>
          )}
        </div>
        
    </div>
  );
};

export default TodoList;
