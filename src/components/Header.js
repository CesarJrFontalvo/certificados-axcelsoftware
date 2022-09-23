import React from 'react'
import '../css/header.css'
import {  AppstoreTwoTone, ArrowDownOutlined, BellOutlined, HomeFilled, SearchOutlined, StarFilled, UsergroupDeleteOutlined } from '@ant-design/icons';
import { Avatar, Button, Image, Tooltip } from 'antd';
import { useNavigate} from 'react-router-dom';


const Header = () => {
    const navigate =useNavigate();

    return (
        <div className='header '>
            <div className='header__left'>
                <img style={{ width: '45px', borderRadius: '100px' }} src='/logoAxcel.png' alt='logo' />
                <div className='header__search '>
                    <SearchOutlined />
                    <input type='text' placeholder='Search' />
                </div>
            </div>

            <div className='header__middle'>
                <div className='header__option header__option--active'  onClick={()=>{
                         navigate('/');
                    }}>
                    <HomeFilled />
                </div>
                <div className='header__option'>
                    <StarFilled />
                </div>
                <div className='header__option'>
                    <UsergroupDeleteOutlined />
                </div>
            </div>

            <div className='header__rigth'>
                <div className='header__info'>
                    {/* <Avatar icon={<UserOutlined />} /> */}
                    <Avatar src={<Image src="https://media-exp1.licdn.com/dms/image/C4D03AQE0o56at2snKw/profile-displayphoto-shrink_200_200/0/1649700139873?e=2147483647&v=beta&t=84LygKjaT6JbsyddzceXKkplrdLD3zpDdQDKsxWV2AY"  />} />
                    <h5>
                        César fontalvo
                    </h5>
                </div>
                <Tooltip className='me-2'>
                    <Button type="primary" shape="circle" icon={<AppstoreTwoTone />} />
                </Tooltip>

                <Tooltip className='me-2'>
                    <Button type="primary" shape="circle" icon={<BellOutlined />} />
                </Tooltip>

                <Tooltip className='me-2'>
                    <Button type="primary" shape="circle" icon={<ArrowDownOutlined />} />
                </Tooltip>
            </div>
        </div>
    )
}

export default Header