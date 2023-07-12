import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
//import Particle from "../Particle";
import pdf from "../../Assets/resume.pdf";
//import { AiOutlineDownload } from "react-icons/ai";
//import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://llamasaresavager.github.io/React-Portfolio/blob/main/src/Assets/resume.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const totalPages = 3;

  const goToPrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <div>
      <Container fluid className="resume-section">
      <div style={{ display: "flex", justifyContent: "center"}}>
            <Document file={pdf}>
              <Page pageNumber={page} />
            </Document>
          </div>
        <Row style={{ paddingTop: "20px", justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            onClick={goToPrevPage}
            disabled={page === 1}
            style={{ marginRight: "2px", maxWidth: "250px", maxHeight: "40px" }}
          >Prev
          </Button>
          <Button
            variant="primary"
            onClick={goToNextPage}
            disabled={page === totalPages}
            style={{ marginLeft: "2px", maxWidth: "250px", maxHeight: "40px" }}
          >Next
          </Button>
          </Row>
          <Row style={{ paddingTop: "20px", justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            onClick={downloadPdf}
            style={{ maxWidth: "250px", maxHeight: "40px" }}
          >
            Download PDF
          </Button>
          
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;