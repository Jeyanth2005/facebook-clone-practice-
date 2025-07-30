import React from 'react'
import './Story.css'
import { Avatar } from '@mui/material'

const Story = ({title,profilesrc,image}) => {
  return (
    <div className='story' style={{backgroundImage: `url(${image})`}}>
      <Avatar src={profilesrc} className='story_avatar' />
      <h4 className='story_title'>{title}</h4>
    </div>
  )
}

export default Story
