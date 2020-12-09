import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
 import agree from '../../images/agree.pdf'

 
function Agreement () {
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
 
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
    return (
       <div>
      <Document
        file={agree}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
    )
}
 
export default Agreement;