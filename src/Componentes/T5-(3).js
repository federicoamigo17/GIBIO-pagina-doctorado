import React, { useState } from "react";

function TablaCinco() {
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
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>
          (3) Indique las actividades del plan de trabajo en donde el/la Tesista
          ha avanzado durante el último año:
        </h4>
        <label>
          Actualización bibliográfica en el tema de la tesis
          <input
            type="checkbox"
            checked={actividades.bibliografica}
            onChange={(e) =>
              setActividades({
                ...actividades,
                bibliografica: e.target.checked,
              })
            }
          />
        </label>
        <br></br>
        <label>
          Realización de cursos de postgrado dentro del plan propuesto en la
          beca
          <input
            type="checkbox"
            checked={actividades.cursosPostgrado}
            onChange={(e) =>
              setActividades({
                ...actividades,
                cursosPostgrado: e.target.checked,
              })
            }
          />
        </label>
        <br></br>
        <label>
          Desarrollo experimental (actividades de laboratorio, actividades de
          campo, elaboración o aplicación de instrumentos específicos para la
          recolección o procesamiento de datos, diseño de prototipos, etc.)
          <input
            type="checkbox"
            checked={actividades.desarrolloExperimental}
            onChange={(e) =>
              setActividades({
                ...actividades,
                desarrolloExperimental: e.target.checked,
              })
            }
          />
        </label>
        <br></br>
        <label>
          Asistencia a congresos, jornadas, talleres, etc.
          <input
            type="checkbox"
            checked={actividades.asistenciaCongresos}
            onChange={(e) =>
              setActividades({
                ...actividades,
                asistenciaCongresos: e.target.checked,
              })
            }
          />
        </label>
        <br></br>
        <label>
          Elaboración y presentación de comunicaciones, póster o publicaciones
          en congresos, jornadas, talleres, etc
          <input
            type="checkbox"
            checked={actividades.comunicaciones}
            onChange={(e) =>
              setActividades({
                ...actividades,
                comunicaciones: e.target.checked,
              })
            }
          />
        </label>
        <br></br>
        <label>
          Elaboración de manuscritos no publicados (capítulos de tesis,
          publicaciones científicas)
          <input
            type="checkbox"
            checked={actividades.manuscritos}
            onChange={(e) =>
              setActividades({ ...actividades, manuscritos: e.target.checked })
            }
          />
        </label>
        <label>
          Publicación de artículos en revistas científicas del área (en prensa o
          publicadas)
          <input
            type="checkbox"
            checked={actividades.publicacionArticulos}
            onChange={(e) =>
              setActividades({
                ...actividades,
                publicacionArticulos: e.target.checked,
              })
            }
          />
        </label>
        <br></br>
        <label>
          Presentación de patentes, modelos, diseños protegidos por propiedad
          intelectual
          <input
            type="checkbox"
            checked={actividades.presentaciones}
            onChange={(e) =>
              setActividades({
                ...actividades,
                presentaciones: e.target.checked,
              })
            }
          />
        </label>
        <br></br>
        <label>
          Pasantías en Universidades/Institutos o Centros de Investigación. (por
          un periodo no menos a 3 meses)
          <input
            type="checkbox"
            checked={actividades.pasantias}
            onChange={(e) =>
              setActividades({ ...actividades, pasantias: e.target.checked })
            }
          />
        </label>
        <br></br>
        <label>
          Formación de recursos humanos
          <input
            type="checkbox"
            checked={actividades.formacionrrhh}
            onChange={(e) =>
              setActividades({
                ...actividades,
                formacionrrhh: e.target.checked,
              })
            }
          />
        </label>
        <br></br>
        <label>
          Dirección y/o participación en proyectos de investigación
          <input
            type="checkbox"
            checked={actividades.participacion}
            onChange={(e) =>
              setActividades({
                ...actividades,
                participacion: e.target.checked,
              })
            }
          />
        </label>
        <br></br>
        <label>
          Premios
          <input
            type="checkbox"
            checked={actividades.premios}
            onChange={(e) =>
              setActividades({ ...actividades, premios: e.target.checked })
            }
          />
        </label>
      </form>
    </div>
  );
}

export default TablaCinco;
