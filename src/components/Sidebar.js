import React from 'react'
import SidebarOptions from './SidebarOptions'
import '../css/sidebar.css'
import { Button } from 'antd'
import { useNavigate} from 'react-router-dom';
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    
    <div className='sidebar '>
      <SidebarOptions src="https://media-exp1.licdn.com/dms/image/C4D03AQE0o56at2snKw/profile-displayphoto-shrink_200_200/0/1649700139873?e=2147483647&v=beta&t=84LygKjaT6JbsyddzceXKkplrdLD3zpDdQDKsxWV2AY" title='César Fontalvo' />

      <Button className='boton-sidebar'  onClick={()=>navigate("/view-pdf")}>
        <SidebarOptions src='https://cdn.xxl.thumbs.canstockphoto.fr/image-isol%C3%A9-jaune-arri%C3%A8re-plan-informatique-dossier-blanc-3d-banque-dillustrations_csp10033752.jpg' title='descargar certificado Laboral' />
      </Button>
      <Button  className='boton-sidebar'  >
        <SidebarOptions src='https://cdn.xxl.thumbs.canstockphoto.fr/image-isol%C3%A9-jaune-arri%C3%A8re-plan-informatique-dossier-blanc-3d-banque-dillustrations_csp10033752.jpg' title='Descargar colilla de pago' />
    
      </Button>
    </div>
  )
}

export default Sidebar