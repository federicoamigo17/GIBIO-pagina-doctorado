import React, { useState } from "react";

function TablaSiete() {
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
          (5) Indique las principales actividades en donde el/la Tesista debería
          focalizarse para finalizar la tesis de doctorado en el plazo previsto
          por la beca:
        </h4>
        <label>
          Asistencia a los cursos de postgrado previstos en el Plan propuesto en
          la beca
          <input
            type="checkbox"
            checked={actividadesfuturas.cursosFut}
            onChange={(e) =>
              setActividadesFuturas({
                ...actividadesfuturas,
                cursosFut: e.target.checked,
              })
            }
          />
        </label>
        <br></br>
        <label>
          Revisión y/o reformulación del proyecto de tesis (antecedentes,
          hipótesis, etc.) o puesta a punto de técnicas o diseños experimentales
          <input
            type="checkbox"
            checked={actividadesfuturas.revisionFut}
            onChange={(e) =>
              setActividadesFuturas({
                ...actividadesfuturas,
                revisionFut: e.target.checked,
              })
            }
          />
        </label>
        <br></br>
        <label>
          Desarrollo de experimentos (actividades de laboratorio, actividades a
          campo, aplicación de instrumentos específicos para la recolección o
          procesamiento de datos, diseño de prototipos, etc.)
          <input
            type="checkbox"
            checked={actividadesfuturas.experimentosFut}
            onChange={(e) =>
              setActividadesFuturas({
                ...actividadesfuturas,
                experimentosFut: e.target.checked,
              })
            }
          />
        </label>
        <br></br>
        <label>
          Análisis de la información recolectada
          <input
            type="checkbox"
            checked={actividadesfuturas.infoFut}
            onChange={(e) =>
              setActividadesFuturas({
                ...actividadesfuturas,
                infoFut: e.target.checked,
              })
            }
          />
        </label>
        <br></br>
        <label>
          Redacción de la tesis
          <input
            type="checkbox"
            checked={actividadesfuturas.tesisFut}
            onChange={(e) =>
              setActividadesFuturas({
                ...actividadesfuturas,
                tesisFut: e.target.checked,
              })
            }
          />
        </label>
      </form>
    </div>
  );
}

export default TablaSiete;
