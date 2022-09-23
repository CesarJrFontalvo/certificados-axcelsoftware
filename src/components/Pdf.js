import React from 'react'

const Pdf = () => {
  return (
    <div style={{position:'absolute', width:'100%', height:'100%'}}>
        <object
        data="/doc/CertificadoLaboral-1.pdf"
        type='application/pdf'
        width='100%'
        height='100%'
        download='certificado.pdf'
        >
          <a href='/doc/CertificadoLaboral-1.pdf' id='enlace_descarga_pdf'
          download='certificado.pdf'
          >

          </a>
        </object>
    </div>
  )
}

export default Pdf