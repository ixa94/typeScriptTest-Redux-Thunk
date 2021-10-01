import React, { FC, useEffect } from 'react';
import { useAction } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/usedTypedSelector';
import { fetchUsers } from '../store/actionCreators/ActionCreatorsUser';

const UserList: FC= () => {
  const {users,error,loading} = useTypedSelector(state=>state.user);
  const {fetchUsers} = useAction()

  useEffect(()=>{
(fetchUsers())
  },[])

  if (loading) {
    return <h1>Loadingg.....</h1>
  }

  if (error) {
    return <h1>Error.....</h1>
  }
  
  return (
    <div>
      {users.map(user=>
        <div>{user.name}</div>)}
    </div>
  );
};

export default UserList;
