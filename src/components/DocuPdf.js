import { Button, Card } from "antd"
import '../css/docuPdf.css'
import React from 'react';

const DocuPdf = () => {

    return (
        <div className="docuPdf" >
            <object
                data="/doc/certificadoLaboral.pdf"
                type='application/pdf'
                width='75%'
                height='90%'

            >
                <Card className="d-flex mx-1 p-3 col-9 col-md-12 col-lg-9 view-pdd">
                    <h3>En dispositivos mobile la previsualización no está disponible, click en descargar para ver tu PDF</h3>
                    <a href='/doc/certificadoLaboral.pdf' download='certificadoLaboral.pdf'>
                        <Button type="primary" className='m-3 text-center' >
                            descargar PDF
                        </Button>
                    </a>
                </Card>
            </object>
        </div>

    )
}

export default DocuPdf