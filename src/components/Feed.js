import React from 'react'
import '../css/feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
// import StoryReel from './StoryReel'
const Feed = () => {
    return (
        <div className='feed'>
            {/* <StoryReel /> */}
            <MessageSender />
            <Post />
        </div>
    )
}

export default Feed