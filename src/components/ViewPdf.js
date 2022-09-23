import {  Input } from 'antd'
import React from 'react'
import DocuPdf from './DocuPdf'
import axios from 'axios';
import { UseForm } from '../helpers/UseForm'
import Swal from 'sweetalert2';
import { Select } from 'antd';
import Search from 'antd/lib/input/Search';
import '../css/feed.css'

const { Option } = Select;

const ViewPdf = () => {
    // const [verPdf, setVerPdf] = useState(true);

    const [values, handleInputChange] = UseForm({
        cedula: '',

    });
    const { cedula } = values;

    const url = 'http://localhost:8080/api/usuarios/';
    const cc = cedula;
    const pdp = '/pdp/'

    const getAxios = () => {
        if (cc === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingresa tu cédula!',

            })
        } else {
            Swal.fire({
                title: 'Realizar la consulta ?',
                text: "Puedes revisar tu certificado en el botón ver PDF",
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si'
            }).then((result) => {
                if (result.isConfirmed) {
                    // event.preventDefault();
                    axios.get(url + cc + pdp)
                        .then(result => {
                            console.log(result)
                        }).catch(console.log)
                        // setVerPdf()
                }
            })
        }
    }
    return (
        <>
            <nav className='d-flex mt-2 p-3 card view-pdd'>
                <form onSubmit={getAxios}>
                    <div className='row'>
                        <div className='col-4'>
                            <Search   onSearch={getAxios} enterButton  onChange={handleInputChange} name='cedula' placeholder="Ingresa tu cédula" className='mx-2' />
                        </div>

                        <div className='col-4'>
                            <Input onChange={handleInputChange} name='dirigido' placeholder="Dirigido a" className='mx-2' />
                        </div>

                        <div className='col-4'>
                            <Select
                             style={{ width: '100%' }} 
                                placeholder="Select..."
                                optionFilterProp="children"
                                // onChange={onChange}
                                // onSearch={onSearch}
                                filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}>
                                <Option value="Completo">Completo</Option>
                                <Option value="Flexible">Flexible</Option>
                                <Option value="Sin salario">Sin salario</Option>
                            </Select>
                        </div>
                    </div>
{/* 
                    <Button type="primary" shape="round" size='xs' icon={<SearchOutlined />} className='m-3 text-center' onClick={() => {
                        // setVerPdf(!verPdf)
                        getAxios();
                    }}>
                        Consultar
                    </Button> */}

                    {/* <Button type="primary" shape="round" size='xs' icon={<EyeInvisibleFilled />} className='m-3 text-center' target='blank' onClick={() => {
                        setVerPdf(!verPdf)
                        // getAxios();
                    }}>
                        {verPdf ? 'Ocultar  PDF' : 'Ver PDF'}
                    </Button> */}
                </form>
            </nav>

            <div className='container-fluid'>
            <DocuPdf />
                {/* {verPdf ? <DocuPdf /> : <PlantillaPdf />} */}
            </div>
        </>
    )
}

export default ViewPdf