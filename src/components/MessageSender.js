import { FileImageTwoTone, SmileTwoTone, VideoCameraTwoTone } from '@ant-design/icons'
import { Avatar, Image } from 'antd'
import React from 'react'
import '../css/messageSender.css'

const MessageSender = () => {
    return (
        <div className='messagesender'>
            <div className='messagesender__top'>
            <Avatar src={<Image src="https://media-exp1.licdn.com/dms/image/C4D03AQE0o56at2snKw/profile-displayphoto-shrink_200_200/0/1649700139873?e=2147483647&v=beta&t=84LygKjaT6JbsyddzceXKkplrdLD3zpDdQDKsxWV2AY"  />} />
                <form>
                <input type='text' placeholder='WHAT IS YOUR'/>
                </form>
                
            </div>

            <div className='messagesender__bottom'>
            <div className='messangerOptions'>
                <VideoCameraTwoTone twoToneColor="#eb2f96" />
                <p>Live video</p>
                </div>

                <div className='messangerOptions'>
                <FileImageTwoTone twoToneColor="lightgreen"/>
                <p>Photo</p>
                </div>

                <div className='messangerOptions'>
                <SmileTwoTone twoToneColor="yellow" />
                <p>Feeling/Ativity</p>
                </div>
            </div>
        </div>
    )
}

export default MessageSender