import { useState,useEffect } from 'react'
import './App.css'
import {Header,Footer} from './components/index'
import { useDispatch } from 'react-redux'
import authservice from './appwrite_util/auth'
import { login,logout } from './store/authSlice'
import { Routes,Route } from 'react-router'

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
     <Header/>
     <Routes>
      <Route path="/" element={<p>doing</p>} />
    </Routes>
     <Footer/>
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
