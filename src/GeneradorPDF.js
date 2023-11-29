import React, { useRef } from "react";
import { jsPDF } from "jspdf";

function PdfGenerator() {
  const contentRef = useRef(null);

  const handleGeneratePDF = () => {
    const { contentWindow } = contentRef.current;

    // Crear un objeto jsPDF
    const doc = new jsPDF();

    // Capturar el contenido de la página en el objeto jsPDF
    doc.html(contentWindow.document.body, {
      callback: () => {
        // Guardar el PDF con un nombre
        doc.save("pagina.pdf");
      }
    });
  };

  return (
    <span onClick={handleGeneratePDF} style={{ cursor: "pointer", textDecoration: "underline", color: "white" }}>
      Descargar como PDF
    </span>
  );
}

export default PdfGenerator;
