import React from "react";
import { jsPDF } from "jspdf";

function PdfGenerator() {
  const handleGeneratePDF = () => {
    // Obtener el contenido de la página
    const content = document.body;

    // Crear un objeto jsPDF con dimensiones personalizadas
    const pdf = new jsPDF({
      unit: "px",   // Unidades en píxeles
      format: [1000, 1400],  // Dimensiones personalizadas (ancho x alto)
    });

    // Agregar el contenido al PDF
    pdf.html(content, {
      callback: () => {
        // Guardar el PDF con un nombre
        pdf.save("pagina.pdf");
      },
    });
  };

  return (
    <div>
      <button onClick={handleGeneratePDF}>
        Generar y Descargar PDF de la Página
      </button>
    </div>
  );
}

export default PdfGenerator;
