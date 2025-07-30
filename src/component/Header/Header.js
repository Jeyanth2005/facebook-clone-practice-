import React from 'react'
import './Header.css'
import {Flag, Forum, Home, Logout, NotificationsActive, Search, StorefrontOutlined, SubscriptionsOutlined, SubscriptOutlined, SupervisedUserCircle, Watch, WatchLater} from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import { Add } from '@mui/icons-material'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
const Header = ({user,setUser}) => {
  const HandleLogout=async()=>{
    await signOut(auth);
    setUser(null);
    window.location.reload();
  }
  return (
    <div className="header">
      <div className="header_left">
        <img src='https://static.facebook.com/images/logos/facebook_2x.png' alt='logo'/>
        <div className="header_input">
          <Search/> <input type="text" placeholder='Search Facebook'/>
        </div>
      </div>
      <div className="header_middle">
        <div className="header_option--active">
          <Home fontSize='large'/>
        </div>
        <div className="header_option">
          <Flag fontSize='large'/>
        </div>
        <div className="header_option">
          <SubscriptionsOutlined fontSize='large'/>
        </div>
        <div className="header_option">
          <StorefrontOutlined fontSize='large'/>
        </div>
        <div className="header_option">
          <SupervisedUserCircle fontSize='large'/>
        </div>
      </div>
      <div className='header_right'>
        <div className='header_info'>
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <Add/>
        </IconButton>
        <IconButton>
          <Forum/>
        </IconButton>
        <IconButton>
          <NotificationsActive/>
        </IconButton>
        <IconButton onClick={HandleLogout}>
          <Logout/>
        </IconButton>
      </div>
    </div>
  )
}

export default Header
