import React, { useState } from "react";

function TablaTres() {
  const [contribucionUltimoAnio, setContribucionUltimoAnio] = useState("");
  const [circunstancias, setCircunstancias] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>
          (1) En función del cronograma presentado en el plan de trabajo del/la
          Tesista, ¿en qué medida contribuyó el trabajo desarrollado en el
          último año al cumplimiento de los objetivos propuestos en el plan de
          tesis? (marcar con una cruz):
        </h4>
        <label>
          <input
            type="radio"
            name="contribucionUltimoAnio"
            value="Satisfactoriamente"
            checked={contribucionUltimoAnio === "Satisfactoriamente"}
            onChange={(e) => setContribucionUltimoAnio(e.target.value)}
          />
          Satisfactoriamente (pase a la pregunta 3)
        </label>
        <br></br>
        <label>
          <input
            type="radio"
            name="contribucionUltimoAnio"
            value="Poco satisfactoriamente"
            checked={contribucionUltimoAnio === "Poco satisfactoriamente"}
            onChange={(e) => setContribucionUltimoAnio(e.target.value)}
          />
          Poco satisfactoriamente
        </label>
        <br></br>
        <label>
          <input
            type="radio"
            name="contribucionUltimoAnio"
            value="No satisfactorio"
            checked={contribucionUltimoAnio === "No satisfactorio"}
            onChange={(e) => setContribucionUltimoAnio(e.target.value)}
          />
          No satisfactorio
        </label>
      </form>
    </div>
  );
}

export default TablaTres;
