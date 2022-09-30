import { Button, DatePicker, Input } from 'antd'
import moment from 'moment';
import { IdcardTwoTone, SearchOutlined } from '@ant-design/icons';
import DocuPago from './DocuPago';

const FormCertificadoPago = () => {
    const onChange = (dateString) => {
        console.log(dateString);
    };
    const disabledDate = (current) => {
        let inicio = current && current < moment('2022-06').endOf('month');
        let fin = current && current > moment().endOf('month');
        return inicio + fin
    };

    return (
        <>
            <nav className='d-flex mt-2 p-3 card view-pdd'>
                <form onSubmit=''>
                    <div className='row'>
                        <label htmlFor="cedula_id" className="form-label mb-1">
                            Ingresa tu cédula
                        </label>
                        <div className='cedula col-12 col-md-3 col-lg-4 item '>
                            <Input type='number' id='cedula_id' prefix={<IdcardTwoTone />} name='cedula' placeholder="Ingresar cédula" />
                        </div>
                        <div className='col-12 col-md-3 col-lg-4 item'>
                            <DatePicker disabledDate={disabledDate} onChange={onChange} picker="month" placeholder='Selecciona el mes' style={{ width: '100%' }} />
                        </div>
                        <div className='col-12 col-md-3 col-lg-4 item'>
                            <Button type="primary" size='xs' icon={<SearchOutlined />} onClick={() => {
                                // getPdf();
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