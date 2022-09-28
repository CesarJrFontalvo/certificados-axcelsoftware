import { SearchOutlined, IdcardTwoTone, BankTwoTone, QuestionCircleTwoTone } from '@ant-design/icons';
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
    const [list, setList] = useState('sinSalario');

    const [values, handleInputChange] = UseForm({
        cedula: '',
        dirigido: '',

    });
    const { cedula, dirigido } = values;
    const onChange = (value) => {
        setList(value)
    }
   
    const getPdf = () => {
        if (values.cedula === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingresa tu cédula!',
            })
        }
        if (dirigido && list === 'completo') {
            Swal.fire({
                title: 'Realizar la consulta ?',
                text: "Click en Si para revisar tu certificado PDF",
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si'
            }).then(async (confir) => {
                if (confir.isConfirmed) {
                    await axios.put(urlUpdate+cedula, {
                        dirigido
                    })
                        .then(result => {
                            axios.get(urlDirigidoSalario+cedula)
                        }).catch(console.log)
                    // setVerPdf()
                }
            })
        }
        if (dirigido && list === 'sinSalario') {
            Swal.fire({
                title: 'Realizar la consulta ?',
                text: "Click en Si para revisar tu certificado PDF",
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si'
            }).then(async (confir) => {
                if (confir.isConfirmed) {
                    await axios.put(urlUpdate+cedula, {
                        dirigido
                    })
                        .then(result => {
                            axios.get(urlDirigidoNoSalario+cedula)
                        }).catch(console.log)
                    // setVerPdf()
                }
            })
        }
        if (list === 'completo' && dirigido === '') {
            Swal.fire({
                title: 'Realizar la consulta ?',
                text: "Click en Si para revisar tu certificado PDF",
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si'
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
                confirmButtonText: 'Si'
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
                confirmButtonText: 'Si'
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
                        <div className='cedula col-3 '>
                            <Input type='number' id='cedula_id' prefix={<IdcardTwoTone />} onChange={handleInputChange} name='cedula' placeholder="Ingresar cédula" />
                        </div>

                        <div className='col-3'>
                            <Input onChange={handleInputChange} prefix={<BankTwoTone />} name='dirigido' placeholder="Dirigido a" />
                        </div>

                        <div className='col-3'>
                            <Select
                                prefix={<QuestionCircleTwoTone />}
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
                        <div className='col-3'>
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