import { Button, Card } from "antd"
import '../css/docuPdf.css'

const DocuPdf = () => {

    return (
        <div className="docuPdf" >
            <object
                data="/doc/certificadoLaboral.pdf"
                type='application/pdf'
                width='75%'
                height='90%'

            >
                <Card className="d-flex mx-2 p-3 col-8 view-pdd">
                    <h3>En dispositivos mobiles la previsualización no está disponible, click en descargar para ver tu PDF</h3>
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