import { GlobalOutlined, MoreOutlined } from '@ant-design/icons'
import { Avatar, Image } from 'antd'
import React from 'react'
import '../css/post.css'

const Post = () => {
    return (
        <div className='post'>
            <div className='post__top'>
                <div className='post__topLeft'>
                    <Avatar src={<Image src="https://media-exp1.licdn.com/dms/image/C4D03AQE0o56at2snKw/profile-displayphoto-shrink_200_200/0/1649700139873?e=2147483647&v=beta&t=84LygKjaT6JbsyddzceXKkplrdLD3zpDdQDKsxWV2AY" />} />
                    <div className='postInfo'>
                        <h4>César Fontalvo</h4>
                        <p> 15: 45 <GlobalOutlined /></p>
                    </div>
                </div>
                <MoreOutlined />
            </div>
            <div className='post__middle'>
                <p>Esto es una publicación</p>
                <img src='https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/302414816_127269080051676_5128338197909158273_n.png?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=1BYU5gi-UGgAX9nyfR2&_nc_ht=scontent.feoh3-1.fna&oh=00_AT8AKdZtGLTrqxXWIxDUnUjrKujzWcO6DQRErDS3GmFx9w&oe=6329020A' alt='img post'/>
            </div>
        </div>
    )
}

export default Post