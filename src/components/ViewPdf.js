import { SearchOutlined, IdcardTwoTone, BankTwoTone } from '@ant-design/icons';
import { urlDirigidoNoSalario, urlDirigidoSalario, urlNoDirigidoExEmpleado, urlNoDirigidoNoSalario, urlNoDirigidoSalario, urlUpdate } from '../url/url';
import { Button, Input } from 'antd'
import React, { useState } from 'react'
import DocuPdf from './DocuPdf'
import axios from 'axios';
import { UseForm } from '../helpers/UseForm'
import Swal from 'sweetalert2';
import { Select } from 'antd';
import '../css/feed.css'

const { Option } = Select;

const ViewPdf = () => {
    // const [verPdf, setVerPdf] = useState(true);
    const [list, setList] = useState('');

    const [values, handleInputChange] = UseForm({
        cedula: '',
        dirigido: '',
        numHorasExDiu:0,
        numHorasExNoc:0
    });
    const { cedula ,dirigido,numHorasExDiu,numHorasExNoc} = values;
    const onChange = (value) => {
        setList(value)
    }
    const getPdf = () => {
        if ((list ==='' && cedula === '') || (list ==='' && cedula !== '')) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Selecciona una opción de la lista despleglable !',
                backdrop: ` rgb(173,123,116,0.6)`,
                position:'top'
            })
        }
        if (cedula === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingresa tu cédula!',
                backdrop: ` rgb(173,123,116,0.6) `,
                position:'top'
            })
        }
        if (dirigido && list === 'completo' && cedula !== '') {
            Swal.fire({
                title: 'Realizar la consulta ?',
                text: "Click en Si para revisar tu certificado PDF",
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si',
                backdrop: `rgb(143,159,134,0.7)`,
                position:'top'
            }).then(async (confir) => {
                if (confir.isConfirmed) {
                    await axios.put(urlUpdate+cedula, {
                        dirigido,
                        numHorasExDiu, 
                        numHorasExNoc
                    })
                        .then(result => {
                            axios.get(urlDirigidoSalario+cedula)
                        }).catch(console.log)
                    // setVerPdf()
                }
            })
        }
        if (dirigido && list === 'sinSalario' && cedula !== '') {
            Swal.fire({
                title: 'Realizar la consulta ?',
                text: "Click en Si para revisar tu certificado PDF",
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si',
                backdrop: `rgb(143,159,134,0.7)`,
                position:'top'
            }).then(async (confir) => {
                if (confir.isConfirmed) {
                    await axios.put(urlUpdate+cedula, {
                        dirigido,
                        numHorasExDiu, 
                        numHorasExNoc
                    })
                        .then(result => {
                            axios.get(urlDirigidoNoSalario+cedula)
                        }).catch(console.log)
                    // setVerPdf()
                }
            })
        }
        if (list === 'completo' && dirigido === '' && cedula !== '') {
            Swal.fire({
                title: 'Realizar la consulta ?',
                text: "Click en Si para revisar tu certificado PDF",
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si',
                backdrop: `rgb(143,159,134,0.7)`,
                position:'top'
            }).then(async (confir) => {
                if (confir.isConfirmed) {
                    await axios.get(urlNoDirigidoSalario+cedula)
                        .then(result => {
                            // axios.get(urlDirigidoSalario)
                        }).catch(console.log)
                    // setVerPdf()
                }
            })
        }
        if (list === 'sinSalario' && dirigido === '' && cedula !== '') {
            Swal.fire({
                title: 'Realizar la consulta ?',
                text: "Click en Si para revisar tu certificado PDF",
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si',
                backdrop: `rgb(143,159,134,0.7)`,
                position:'top'
            }).then(async (confir) => {
                if (confir.isConfirmed) {
                    await axios.get(urlNoDirigidoNoSalario+cedula)
                        .then(result => {
                            // axios.get(urlDirigidoSalario)
                        }).catch(console.log)
                    // setVerPdf()
                }
            })
        }
        if (list === 'ex' && cedula !== '') {
            Swal.fire({
                title: 'Realizar la consulta ?',
                text: "Click en Si para revisar tu certificado PDF",
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si',
                backdrop: `rgb(143,159,134,0.7)`,
                position:'top'
            }).then(async (confir) => {
                if (confir.isConfirmed) {
                    await axios.get(urlNoDirigidoExEmpleado+cedula)
                        .then(result => {
                            // axios.get(urlDirigidoSalario)
                        }).catch(console.log)
                    // setVerPdf()
                }
            })
        }
    }
    return (
        <>
            <nav className='d-flex mt-2 p-3 card view-pdd'>
                <form >
                    <div className='row'>
                        <label htmlFor="cedula_id" className="form-label mb-1">
                            Ingresa tu cédula
                        </label>
                        <div className=' col-12 col-md-3 col-lg-3 item'>
                            <Input type='number' id='cedula_id' prefix={<IdcardTwoTone />} onChange={handleInputChange} name='cedula' placeholder="Ingresar cédula" />
                        </div>

                        <div className='col-12 col-md-3 col-lg-3  item'>
                            <Input onChange={handleInputChange} prefix={<BankTwoTone />} name='dirigido' placeholder="Dirigido a" />
                        </div>

                        <div className='col-12 col-md-3 col-lg-3  item'>
                            <Select
                                style={{ width: '100%' }}
                                placeholder="Select..."
                                optionFilterProp="children"
                                onChange={onChange}
                                filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}>
                                <Option value="completo">Completo</Option>
                                <Option value="ex">Ex empleado</Option>
                                <Option value="sinSalario">Sin salario</Option>
                            </Select>
                        </div>
                        <div className='col-12 col-md-3 col-lg-3  item'>
                            <Button type="primary" size='xs' icon={<SearchOutlined />} onClick={() => {
                                // setVerPdf(!verPdf)
                                getPdf();
                            }}>
                                Consultar
                            </Button>
                        </div>
                    </div>


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