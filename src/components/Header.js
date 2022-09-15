import React from 'react'
import '../css/header.css'
import {  AppstoreTwoTone, ArrowDownOutlined, BellOutlined, HomeFilled, SearchOutlined, StarFilled, UsergroupDeleteOutlined } from '@ant-design/icons';
import { Avatar, Button, Image, Tooltip } from 'antd';

const Header = () => {
    return (
        <div className='header mb-1'>
            <div className='header__left'>
                <img style={{ width: '40px', borderRadius: '100px' }} src='https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/291053482_103544055757512_9094859423898683856_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-HZYu5yHn7kAX9jdh7e&_nc_ht=scontent.feoh3-1.fna&oh=00_AT8lTSz_b_c2D9UoSZffvAGOArbFi7ZxAaT1W6-L89vxNw&oe=6329128D' alt='logo' />
                <div className='header__search '>
                    <SearchOutlined />
                    <input type='text' placeholder='Search' />
                </div>

            </div>

            <div className='header__middle'>
                <div className='header__option header__option--active'>
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