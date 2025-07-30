import React from 'react'
import './PostUploaded.css'
import { Avatar } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import { InsertEmoticon } from '@mui/icons-material'
import { useState } from 'react'
import { db } from '../../firebase'
import { storage } from '../../firebase'
import { ref } from 'firebase/storage'

const PostUploaded = ({user}) => {
    const [input, setInput] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const storageRef=ref(storage, `images/${image.name}`);
        console.log(input,image);
    }

  return (
    <div className='postUploaded'>
      <div className='postUploaded_header'>
        <Avatar src={user.photoURL} className='postUploaded_avatar' />
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder={`What's on your mind?`} className='postUploaded_input' value={input} onChange={(e)=>setInput(e.target.value)}/>
            <input type='file' onChange={(e)=>setImage(e.target.files[0])}/>
            <button type='submit' className='postUploaded_button' onClick={handleSubmit}>Post</button>
        </form>
      </div>
      <div className='postUploaded_bottom'>
        <div className='postUploaded_option'>
            <VideocamIcon style={{color: 'blue'}} />
            <h3>Live Video</h3>
        </div>
        <div className='postUploaded_option'>
            <PhotoLibraryIcon style={{color: 'blue'}} />
            <h3>Photo/Video</h3>
        </div>
        <div className='postUploaded_option'>
            <InsertEmoticon style={{color: 'blue'}} />
            <h3>Feeling/Activity</h3>
        </div>

      </div>
    </div>
  )
}

export default PostUploaded
