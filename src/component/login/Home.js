import React from 'react'
import Header from '../Header/Header'
import './Home.css'
import Sidebar from '../Sidebar/Sidebar'
import Feed from '../Feed/Feed'
import StoryReel from '../StoryReel/StoryReel'
import Story from '../Story/Story'
const Home = ({user,setUser}) => {
  return (
    <div>
      <Header user={user} setUser={setUser}/>
      <div className='app_body'>
        <Sidebar user={user}/>
        <Feed user={user}/>
        <h3>Widget</h3>
      </div>
    </div>
  )
}

export default Home
