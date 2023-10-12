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
    <div>
      <button onClick={handleGeneratePDF}>Generar PDF de la página</button>
      <iframe
        ref={contentRef}
        title="Contenido a exportar"
        src="/ruta-a-tu-pagina"
        style={{ display: "none" }}
      />
    </div>
  );
}

export default PdfGenerator;
