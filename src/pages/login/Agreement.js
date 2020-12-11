import React, { useState } from 'react';
 import agree from '../../images/agree.pdf'
import { PDFViewer } from '@react-pdf/renderer';
 import { Document, Page } from 'react-pdf';

function Agreement () {

 
    return (
       <div>
       all that powrr
      <PDFViewer>
        <agree />
      </PDFViewer>
    </div>
    )
}
 
export default Agreement;