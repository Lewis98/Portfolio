import React, {useState} from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';


const viewerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px 0',
    padding: '10px',
}

const viewerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
    standardFontDataUrl: 'standard_fonts/',
  };

export default function PDFResume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  
    return (
        <div style={viewerStyle}>
        <div style={viewerContainerStyle}>
          <Document file='CV.pdf' onLoadSuccess={onDocumentLoadSuccess} options={options}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      </div>
    );
}
