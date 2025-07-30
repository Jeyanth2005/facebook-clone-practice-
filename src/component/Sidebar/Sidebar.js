import React from 'react'
import './Sidebar.css'
import SidebarRow from '../SidebarRow/SidebarRow'
import { Chat, EmojiFlags, ExpandMoreOutlined, People, VideoLibrary } from '@mui/icons-material'

const Sidebar = ({user}) => {
  return (
    <div>
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow title="Pages" Icon={EmojiFlags}/>
      <SidebarRow title="Friends" Icon={People}/>
      <SidebarRow title="Messenger" Icon={Chat}/>
      <SidebarRow title="Marketplace" Icon={EmojiFlags}/>
      <SidebarRow title="Videos" Icon={VideoLibrary}/>
      <SidebarRow title="More" Icon={ExpandMoreOutlined}/>
    </div>
  )
}

export default Sidebar
