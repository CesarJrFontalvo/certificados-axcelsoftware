import { Card } from "antd"
const DocuPdf = () => {

    return (
        <div style={{ position: 'absolute', width: '65%',marginLeft: '-10px', height: '90%',  marginTop:'20px' }}>
            <object
                data="/doc/certificadoBack.pdf"
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