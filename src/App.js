import React, {useEffect, useState} from 'react'
import Login from './component/login/Login'
import Home from './component/login/Home'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
const App = () => {
  const [user,setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  })
  return (
    <div>
      {!user ? <Login setUser={setUser}/> : <Home user={user} setUser={setUser}/>}
    </div>
  )
}

export default App
