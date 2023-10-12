import React, { useState } from "react";

function TablaCuatro() {
    const [circunstancias, setCircunstancias] = useState([]);
    const [Otros, setOtros] = useState("");
    const [actividades, setActividades] = useState({
        bibliografica: false,
        cursosPostgrado: false,
        desarrolloExperimental: false,
        asistenciaCongresos: false,
        comunicaciones: false,
        manuscritos: false,
        publicacionArticulos: false,
        presentaciones: false,
        pasantias: false,
        formacionrrhh: false,
        participacion: false,
        premios: false,
      });
      const [plazoTesis, setPlazoTesis] = useState("");
      const [actividadesfuturas, setActividadesFuturas] = useState({
        cursosFut: false,
        revisionFut: false,
        experimentosFut: false,
        infoFut: false,
        tesisFut: false,
      });

    const handleSubmit = (event) => {
        event.preventDefault(); 
    };    

return (  
<div>
  <form onSubmit={handleSubmit}>
  <h4>
          (2)Si respondió "poco satisfactorio" o "no satisfactorio", indique las
          circunstancias o problemas que causaron este grado de avance (marcar
          con una cruz):
        </h4>
        <label>
          Problemas de salud del/la Tesista
          <input
            type="checkbox"
            checked={circunstancias.includes(
              "Problemas de salud del/la Tesista"
            )}
            onChange={(e) => {
              if (e.target.checked) {
                setCircunstancias([
                  ...circunstancias,
                  "Problemas de salud del/la Tesista",
                ]);
              } else {
                setCircunstancias(
                  circunstancias.filter(
                    (c) => c !== "Problemas de salud del/la Tesista"
                  )
                );
              }
            }}
          />
        </label>
        <br></br>
        <label>
          Problemas de salud de un familiar
          <input
            type="checkbox"
            checked={circunstancias.includes(
              "Problemas de salud de un familiar"
            )}
            onChange={(e) => {
              if (e.target.checked) {
                setCircunstancias([
                  ...circunstancias,
                  "Problemas de salud de un familiar",
                ]);
              } else {
                setCircunstancias(
                  circunstancias.filter(
                    (c) => c !== "Problemas de salud de un familiar"
                  )
                );
              }
            }}
          />
        </label>
        <br></br>
        <label>
          Inconvenientes en el desarrollo de experimentos (factores climáticos,
          falta de puesta a punto de la/s técnicas)
          <input
            type="checkbox"
            checked={circunstancias.includes(
              "Inconvenientes en el desarrollo de experimentos (factores climáticos, falta de puesta a punto de la/s técnicas)"
            )}
            onChange={(e) => {
              if (e.target.checked) {
                setCircunstancias([
                  ...circunstancias,
                  "Inconvenientes en el desarrollo de experimentos (factores climáticos, falta de puesta a punto de la/s técnicas)",
                ]);
              } else {
                setCircunstancias(
                  circunstancias.filter(
                    (c) =>
                      c !==
                      "Inconvenientes en el desarrollo de experimentos (factores climáticos, falta de puesta a punto de la/s técnicas)"
                  )
                );
              }
            }}
          />
        </label>
        <br></br>
        <label>
          Problemas de financiamiento (falta de insumos específicos, falta de
          viáticos para viajes de campo, publicaciones o bibliografía, etc.)
          <input
            type="checkbox"
            checked={circunstancias.includes(
              "Problemas de financiamiento (falta de insumos específicos, falta de viáticos para viajes de campo, publicaciones o bibliografía, etc.)"
            )}
            onChange={(e) => {
              if (e.target.checked) {
                setCircunstancias([
                  ...circunstancias,
                  "Problemas de financiamiento (falta de insumos específicos, falta de viáticos para viajes de campo, publicaciones o bibliografía, etc.)",
                ]);
              } else {
                setCircunstancias(
                  circunstancias.filter(
                    (c) =>
                      c !==
                      "Problemas de financiamiento (falta de insumos específicos, falta de viáticos para viajes de campo, publicaciones o bibliografía, etc.)"
                  )
                );
              }
            }}
          />
        </label>
        <br></br>
        <label>
          Problemas de infraestructura (falta de equipamiento, falta de
          disponibilidad de espacio en el laboratorio, falta de escritorio o PC
          en el lugar de trabajo, etc.)
          <input
            type="checkbox"
            checked={circunstancias.includes(
              "Problemas de infraestructura (falta de equipamiento, falta de disponibilidad de espacio en el laboratorio, falta de escritorio o PC en el lugar de trabajo, etc.)"
            )}
            onChange={(e) => {
              if (e.target.checked) {
                setCircunstancias([
                  ...circunstancias,
                  "Problemas de infraestructura (falta de equipamiento, falta de disponibilidad de espacio en el laboratorio, falta de escritorio o PC en el lugar de trabajo, etc.)",
                ]);
              } else {
                setCircunstancias(
                  circunstancias.filter(
                    (c) =>
                      c !==
                      "Problemas de infraestructura (falta de equipamiento, falta de disponibilidad de espacio en el laboratorio, falta de escritorio o PC en el lugar de trabajo, etc.)"
                  )
                );
              }
            }}
          />
        </label>
        <br></br>
        <label>
          Falta de motivación o compromiso del/la Tesista en las tareas
          <input
            type="checkbox"
            checked={circunstancias.includes(
              "Falta de motivación o compromiso del/la Tesista en las tareas"
            )}
            onChange={(e) => {
              if (e.target.checked) {
                setCircunstancias([
                  ...circunstancias,
                  "Falta de motivación o compromiso del/la Tesista en las tareas",
                ]);
              } else {
                setCircunstancias(
                  circunstancias.filter(
                    (c) =>
                      c !==
                      "Falta de motivación o compromiso del/la Tesista en las tareas"
                  )
                );
              }
            }}
          />
        </label>
        <br></br>
        <label>
          Otros problemas (detalle brevemente):
          <input
            type="text"
            value={Otros}
            onChange={(e) => setOtros(e.target.value)}
          />
        </label>
  </form>
</div>
);
}


export default TablaCuatro;