import { AppstoreOutlined, FilePdfTwoTone, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/right.css'

const MenuLateral = () => {
    const navigate = useNavigate();
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
        getItem('Descargar certificado', 'sub1', <AppstoreOutlined />, [
            getItem('Certificado laboral', 'certificado-laboral', <FilePdfTwoTone twoToneColor="red" />),
            getItem('Certificado de pago', 'certificado-pago', <FilePdfTwoTone twoToneColor="red" />),
            getItem('Impuestos', 'inpuestos', <FilePdfTwoTone twoToneColor="red" />),

        ]),
        getItem('Navigation Three', 'sub4', <SettingOutlined />, [
            getItem('Option 9', '9'),
            getItem('Option 10', '10'),

        ]),
    ];

    const onClick = (e) => {
        navigate(`/${e.key}`);
    };
    return (

        <div className='menu-lateral'>
            <Menu
            className='menu'
                mode="inline"
                onClick={onClick}
                // style={{width: 256}}
                // defaultOpenKeys={['sub1']}
                items={items}
            />
        </div>
    )
}

export default MenuLateral