import { AppstoreOutlined, FilePdfTwoTone, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react'
import { useNavigate} from 'react-router-dom';



const MenuLateral = () => {
    const navigate =useNavigate();
    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }

    const items = [
  
        getItem('Descargar certificado', 'sub2', <AppstoreOutlined />, [
            getItem('Certificado laboral', 'view-pdf',<FilePdfTwoTone twoToneColor="red" />),
            getItem('Colilla de pago', '6', <FilePdfTwoTone twoToneColor="red" />),
          
        ]),
        getItem('Navigation Three', 'sub4', <SettingOutlined  />, [
            getItem('Option 9', '9'),
            getItem('Option 10', '10'),
           
        ]),
    ];

    const onClick = (e) => {
        // console.log('pulsado', e.key);
        navigate(e.key);
        
    };

    return (
        <div >
            <Menu
                onClick={onClick}
                style={{
                    width: 256,
                }}
                mode="vertical"
                items={items}
            />
        </div>
    )
}

export default MenuLateral