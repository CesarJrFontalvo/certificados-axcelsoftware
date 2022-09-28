import { Card } from 'antd'
import React from 'react'

const DocuPago = () => {
  return (
    <div className="docuPdf" >
            <object
                data="/doc/certificadoPago.pdf"
                type='application/pdf'
                width='75%'
                height='90%'
                
            >
                <Card>
                    <h1>no hay datos</h1>
                </Card>
            </object>
        </div>
  )
}

export default DocuPago