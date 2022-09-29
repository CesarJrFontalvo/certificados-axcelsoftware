import { Card } from "antd"
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
                <Card>
                    <h1>no hay datos</h1>
                </Card>
            </object>
        </div>

    )
}

export default DocuPdf