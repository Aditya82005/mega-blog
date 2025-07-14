import { useState,useEffect } from 'react'
import './App.css'
import index from './components'
import { useDispatch } from 'react-redux'
import authservice from './appwrite_util/auth'
import { login,logout } from './store/authSlice'

function App() {
  const [Loading, setLoading] = useState(true)
  const dispatch=useDispatch();
  useEffect(() => {
    authservice.getAccount()
    .then((userdata)=>{
      if(userdata){
        dispatch(login({userdata}))
      }else(
        dispatch(logout())
      )
    })
    .catch(console.log("appwrite can not fetch account"))
    .finally(setLoading(false))
  
  }, [])
  

  return !Loading? (
   <>
   <div>
     <index.header/>
     <h3 className="text-bg-primary">hello world</h3>
     <index.footer/>
    </div>
   </>
  ):(
    <>
    Loading...
    please Wait
    </>
  )
}

export default App
