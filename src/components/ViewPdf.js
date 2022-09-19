import { Button } from 'antd'
import React, { useState } from 'react'
import DocuPdf from './DocuPdf'
import PlantillaPdf from './PlantillaPdf'
import { pdfjs } from 'react-pdf';
import { useNavigate} from 'react-router-dom';




const ViewPdf = () => {
    const navigate =useNavigate();
    pdfjs.GlobalWorkerOptions.workerSrc =
        `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const data = {
        titulo: 'Certificado laboral',
        contenido: 'El (la) suscrito representante de la empresa (nombre de la empresa)'
    }
    const [verPdf, setVerPdf] = useState(false)
    return (
        <div>
            <nav>
                <input placeholder="Basic usage" />
                <Button type="primary" className='m-3 text-center' target='blank' onClick={() => {
                    setVerPdf(!verPdf)
                }}>
                    {verPdf ? 'ocultar ver PDF' : 'ver PDF'}
                </Button>

                <a href='/pdf' target='_blank'>

                    <Button type="primary" className='m-3 text-center' >
                        descargar PDF
                    </Button>
                </a>
                
                <Button type="primary" className='m-3 text-center'  onClick={() => {
                   navigate('/');
                }} >
                        Home
                    </Button>
            </nav>

            <div className='container-fluid'>
            {verPdf ? <DocuPdf data={data} /> : <PlantillaPdf data={data} />}
            </div>

        </div>
    )
}

export default ViewPdf