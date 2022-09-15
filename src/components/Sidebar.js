import { DownOutlined } from '@ant-design/icons'
import React from 'react'
import SidebarOptions from './SidebarOptions'
import '../css/sidebar.css'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <SidebarOptions src="https://media-exp1.licdn.com/dms/image/C4D03AQE0o56at2snKw/profile-displayphoto-shrink_200_200/0/1649700139873?e=2147483647&v=beta&t=84LygKjaT6JbsyddzceXKkplrdLD3zpDdQDKsxWV2AY" title='César Fontalvo'/>
        <SidebarOptions  src='https://th.bing.com/th/id/R.d5a15749188b42b9ebe2573a443dfe53?rik=2%2fF5VEcpXo8PZw&riu=http%3a%2f%2fwww.blogsaays.com%2fwp-content%2fuploads%2f2012%2f04%2ffile-search.jpg&ehk=1Z0%2bqDlae3XrA20u3zYyt90nqpVt85z20YHSXf4%2b0TI%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1' title='Certificado Laboral'/>
        <SidebarOptions  src='https://cdn.xxl.thumbs.canstockphoto.fr/image-isol%C3%A9-jaune-arri%C3%A8re-plan-informatique-dossier-blanc-3d-banque-dillustrations_csp10033752.jpg'  title='Certificado Laboral'/>
        <SidebarOptions  src='https://cdn.xxl.thumbs.canstockphoto.fr/image-isol%C3%A9-jaune-arri%C3%A8re-plan-informatique-dossier-blanc-3d-banque-dillustrations_csp10033752.jpg'  title='Certificado Laboral'/>
        <SidebarOptions  src='https://cdn.xxl.thumbs.canstockphoto.fr/image-isol%C3%A9-jaune-arri%C3%A8re-plan-informatique-dossier-blanc-3d-banque-dillustrations_csp10033752.jpg'  title='Certificado Laboral'/>
        <SidebarOptions Icon={DownOutlined } title=' Ver mas'/>
    </div>
  )
}

export default Sidebar