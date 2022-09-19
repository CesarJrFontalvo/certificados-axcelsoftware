import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf';


const url =
    "https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf";

const DocuPdf = ({ data }) => {
   
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }
 
    return (
      
        <>
            <div className="container content-center"
         >
                <Document
                    file="/doc/certificado.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page height="500" pageNumber={pageNumber} />
                </Document>
            </div>
        </>
    )
}

export default DocuPdf