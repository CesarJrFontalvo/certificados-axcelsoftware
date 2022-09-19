import { Button, Input } from 'antd'
import React, { useState } from 'react'
import DocuPdf from './DocuPdf'
import PlantillaPdf from './PlantillaPdf'
import { pdfjs } from 'react-pdf';

  

const ViewPdf = () => {
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
                    {verPdf ? 'ocultar ver PDF': 'ver PDF'}
                </Button>
                <a href='/pdf' target='_blank'>

                <Button type="primary" className='m-3 text-center' >
                    
                    descargar PDF
                </Button>
                </a>
            </nav>
            {verPdf ? <DocuPdf data={data}/>  : <PlantillaPdf data={data}/>}
           
        </div>
    )
}

export default ViewPdf