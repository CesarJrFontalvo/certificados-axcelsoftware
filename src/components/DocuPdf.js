import { Card } from "antd"
const DocuPdf = () => {

    return (
        <div style={{ position: 'absolute', width: '60%', height: '90%', margin: '20px' }}>
            <object
                data="/doc/certificadoBack.pdf"
                type='application/pdf'
                width='65%'
                height='80%'
            >
                <Card>
                    <h1>no hay datos</h1>
                </Card>
            </object>
        </div>

    )
}

export default DocuPdf