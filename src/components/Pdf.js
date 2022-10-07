import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { Button } from "antd"
import React, { useEffect, useState } from 'react'
import DocumentoPDF from './DocumentoPDF';
import VistaWeb from './VistaWeb';

const Pdf = () => {
  const [poema, setPoema] = useState("");
  const [verWeb, setVerWeb] = useState(false);
  const [verPDF, setVerPDF] = useState(false);
  function fetchPoema() {
    fetch("https://www.poemist.com/api/v1/randompoems")
      .then((response) => response.json())
      .then((data) => {
        setPoema(data[0]);
        console.log(data[0]);
      });
  }
  useEffect(() => {
    fetchPoema();
  }, []);
  return (
    // <div style={{position:'absolute', width:'100%', height:'100%'}}>
    //     <object
    //     data="/doc/CertificadoLaboral-1.pdf"
    //     type='application/pdf'
    //     width='100%'
    //     height='100%'
    //     download='certificado.pdf'
    //     >
    //       <a href='/doc/CertificadoLaboral-1.pdf' id='enlace_descarga_pdf'
    //       download='certificado.pdf'
    //       >

    //       </a>
    //     </object>
    // </div>
    <div style={{ minHeight: "100vh" }}>
  <nav
      style={{
        display: "flex",
        borderBottom: "1px solid black",
        padding: "5px",
        justifyContent: "space-around",
      }}
    >
      <Button type="primary"
        onClick={() => {
          setVerWeb(!verWeb);
          setVerPDF(false);
        }}
      >
        {verWeb ? "Ocultar Web" : "Ver Web"}
      </Button>
      <Button type="primary"
        onClick={() => {
          setVerPDF(!verPDF);
          setVerWeb(false);
        }}
      >
        {verPDF ? "Ocultar PDF" : "Ver PDF"}
      </Button>
      <PDFDownloadLink
        document={<DocumentoPDF poema={poema} />}
        fileName="certificado-Desde-React-Pdf.pdf"
      >
        <Button type="primary">Descargar PDF</Button>
      </PDFDownloadLink>
    </nav>
    {poema ? (
      <>
        {verWeb ? <VistaWeb poema={poema} /> : null}
        {verPDF ? (
          <PDFViewer style={{ width: "100%", height: "90vh" }}>
            <DocumentoPDF poema={poema} />
          </PDFViewer>
        ) : null}
      </>
    ) : null}
  </div>
  )
}

export default Pdf