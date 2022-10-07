import { Button, DatePicker, Input } from 'antd'
import moment from 'moment';
import {   IdcardTwoTone, SearchOutlined } from '@ant-design/icons';
import DocuPago from './DocuPago';
import { useState } from 'react';
import { UseForm } from '../helpers/UseForm';
import { urlComprobantePago, urlUpdate } from '../url/url';
import Swal from 'sweetalert2';
import axios from 'axios';

const FormCertificadoPago = () => {
    const [mesConsulta, setMesConsulta] = useState('Invalid date')
    const disabledDate = (current) => {
        // let inicio = current && current < moment('2022-06').endOf('month');
        let fin = current && current > moment().endOf('month');
        return fin
    };
    const [values, handleInputChange] = UseForm({
        cedula: '',
        numHorasExDiu:0,
        numHorasExNoc:0
    });
    const { cedula ,numHorasExDiu,numHorasExNoc} = values;
    const onChange = (date) => {
        setMesConsulta(moment(date).format(`YYYY-MM-DD`));
    };
    const getCertificado = () =>{
        if ((mesConsulta ==='Invalid date' )) {
            Swal.fire({
                icon: 'error',
                title: 'Todos los campos son obligatorios',
                text: 'Selecciona la fecha !',
                backdrop: ` rgb(173,123,116,0.6) `,
                position:'top'
            })
        }
        if (cedula === '') {
            Swal.fire({
                icon: 'error',
                title: 'Todos los campos son obligatorios',
                text: 'Ingresa tu cédula!',
                backdrop: ` rgb(173,123,116,0.6)  `,
                position:'top'
            })
        }
        if (cedula !== '' && mesConsulta !=='Invalid date' ) {
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
                    mesConsulta,
                    numHorasExDiu, 
                    numHorasExNoc
                })
                    .then(result => {
                        axios.get(urlComprobantePago+cedula)
                    }).catch(console.log)
                // setVerPdf()
            }
        })
    }
    }
    console.log(values)
    return (
        <>
            <nav className='d-flex mt-2 p-3 card view-pdd '>
                <form onSubmit=''>
                    <div className='row mx-4'>
                        <label htmlFor="cedula_id" className="form-label mb-1">
                            Ingresa tu cédula
                        </label>
                        <div className='cedula col-12 col-md-4 col-lg-4 item '>
                            <Input onChange={handleInputChange} type='number' id='cedula_id' prefix={<IdcardTwoTone />} name='cedula' placeholder="Ingresar cédula" />
                        </div>
                        <div className='col-12 col-md-4 col-lg-4 item'>
                            <DatePicker name='fechaMes' disabledDate={disabledDate} onChange={onChange} picker="month" placeholder='Selecciona el mes' style={{ width: '100%' }} />
                        </div>

                    
                        <div className='col-3 col-md-2 col-lg-4 item'>
                            <Button type="primary" size='xs' icon={<SearchOutlined />} onClick={() => {
                                getCertificado();
                            }}>
                                Consultar
                            </Button>

                        </div>
                    </div>
                </form>
            </nav>

            <div className='container-fluid'>
                <DocuPago />
                {/* {verPdf ? <DocuPdf /> : <PlantillaPdf />} */}
            </div>
        </>

    );
};

export default FormCertificadoPago