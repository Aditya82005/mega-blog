import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../appwrite_util/auth'
import { logout } from '../../store/authSlice';


function Logoutbtn() {
    const dispatch=useDispatch();
    const logouthandler=()=>{
        authservice.logout()
        .then(dispatch(logout()))
        .catch(console.log("could not login because",Error))
    }
  return (
    <div>
      <button type="button" className="btn btn-outline-danger" onClick={()=>{logouthandler()}}>Logout</button>
    </div>
  )
}

export default Logoutbtn
