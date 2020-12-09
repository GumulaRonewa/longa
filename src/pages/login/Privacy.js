import React from 'react'
 import privacy from '../../images/privacy.pdf'

import PDFViewer from 'pdf-viewer-reactjs'
 
const Privacy = () => {
    return (
        <PDFViewer
            document={{
                url: privacy,
            }}
        />
    )
}
 
export default Privacy;