import { Avatar, Image } from 'antd'
import React from 'react'
import '../css/storyReel.css'


const StoryReel = () => {
    return (
        <div className='storyReel'>
            <div className='story' style={{ backgroundImage: `url('https://todoimagenesde.com/wp-content/uploads/2020/04/FondosPantalla36-500x810.jpg') ` }}>
                  <Avatar src={<Image src="https://mir-s3-cdn-cf.behance.net/user/138/ada422208567823.61d4fcbd59837.png"  />} />
                <h4>Dayana Gouveia</h4>
            </div>
            <div className='story' style={{ backgroundImage: `url('https://t4.kn3.net/taringa/6/1/9/9/6/2/agustin_30/116.jpg') ` }}>
                  <Avatar src={<Image src="https://media-exp1.licdn.com/dms/image/C4D03AQE0o56at2snKw/profile-displayphoto-shrink_200_200/0/1649700139873?e=2147483647&v=beta&t=84LygKjaT6JbsyddzceXKkplrdLD3zpDdQDKsxWV2AY"  />} />
                <h4>César Fontalvo</h4>
            </div>
            <div className='story' style={{ backgroundImage: `url('https://th.bing.com/th/id/R.07b214933af89adab7a55648ec6a4c36?rik=wkSXaZMuyRWu8g&riu=http%3a%2f%2ffondospantalla.net%2fwp-content%2fuploads%2f2017%2f02%2fFondos-de-pantalla-para-celular-Im%C3%A1genes-fotos-movil-Android-Iphones-Wallpaper-hd-ciudad-paris-torre-eiffel.jpg&ehk=oQ4AkoG7RvnpmRGhlP1S3mjjPqiOXfoxs%2fE1atukJ9c%3d&risl=&pid=ImgRaw&r=0') ` }}>
                  <Avatar src={<Image src="https://media-exp1.licdn.com/dms/image/C4D03AQE0o56at2snKw/profile-displayphoto-shrink_200_200/0/1649700139873?e=2147483647&v=beta&t=84LygKjaT6JbsyddzceXKkplrdLD3zpDdQDKsxWV2AY"  />} />
                <h4>Luisa Fernanda</h4>
            </div>
            <div className='story' style={{ backgroundImage: `url('https://todoimagenesde.com/wp-content/uploads/2020/04/FondosPantalla36-500x810.jpg') ` }}>
            <Avatar src={<Image src="https://mir-s3-cdn-cf.behance.net/user/138/ada422208567823.61d4fcbd59837.png"  />} />
                <h4>Dayana Gouveia</h4>
            </div>
            <div className='story' style={{ backgroundImage: `url('https://th.bing.com/th/id/R.07b214933af89adab7a55648ec6a4c36?rik=wkSXaZMuyRWu8g&riu=http%3a%2f%2ffondospantalla.net%2fwp-content%2fuploads%2f2017%2f02%2fFondos-de-pantalla-para-celular-Im%C3%A1genes-fotos-movil-Android-Iphones-Wallpaper-hd-ciudad-paris-torre-eiffel.jpg&ehk=oQ4AkoG7RvnpmRGhlP1S3mjjPqiOXfoxs%2fE1atukJ9c%3d&risl=&pid=ImgRaw&r=0') ` }}>
                  <Avatar src={<Image src="https://media-exp1.licdn.com/dms/image/C4D03AQE0o56at2snKw/profile-displayphoto-shrink_200_200/0/1649700139873?e=2147483647&v=beta&t=84LygKjaT6JbsyddzceXKkplrdLD3zpDdQDKsxWV2AY"  />} />
                <h4>Luisa Fernanda</h4>
            </div>
         
     
        </div>
    )
}

export default StoryReel