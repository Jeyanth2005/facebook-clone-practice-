import React from 'react'
import './Feed.css'
import StoryReel from '../StoryReel/StoryReel'
import PostUploaded from '../PostUploaded/PostUploaded'
const Feed = ({user}) => {
  return (
    <div>
      <StoryReel />
      <PostUploaded user={user}/>
    </div>
  )
}

export default Feed
