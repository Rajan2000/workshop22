import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './Reducer/userReducer';
// import {useSelector} from "react-redux;"
function Logout() {
    const dispatch=useDispatch();
    const user=useSelector(selectUser);
   const  handleLogout=(e)=>{
        e.preventDefault();
       
        
        dispatch(logout());
    }
    return (
        <div>
            <h1>Hello  {user.name}</h1>
            <h3>Your Email id is {user.email}</h3>
            <button onClick={(e)=>handleLogout(e)}>Logout</button>
        </div>
    )
}

export default Logout;