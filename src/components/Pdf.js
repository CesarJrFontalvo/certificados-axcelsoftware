import React from 'react'

const Pdf = () => {
  return (
    <div style={{position:'absolute', width:'100%', height:'100%'}}>
        <object
        data="/doc/certificado.pdf"
        type='application/pdf'
        width='100%'
        height='100%'
        >

        </object>
    </div>
  )
}

export default Pdf