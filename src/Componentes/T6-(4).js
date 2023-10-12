import React, { useState } from "react";

function TablaSeis() {
    const [plazoTesis, setPlazoTesis] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h4>
          De acuerdo con el avance en el plan de tesis y el plan de la Carrera
          de Doctorado, ¿cómo evalúa la situación del/la Tesista en relación con
          la posibilidad de finalizar la tesis de doctorado en el plazo previsto
          por la beca?:
        </h4>
        <label>
          Es probable que logre finalizarla en el plazo previsto
          <input
            type="radio"
            name="PlazoTesis"
            value="Es probable que logre finalizarla en el plazo previsto"
            checked={
              plazoTesis ===
              "Es probable que logre finalizarla en el plazo previsto"
            }
            onChange={(e) => setPlazoTesis(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Es poco probable que logre finalizarla en el plazo previsto
          <input
            type="radio"
            name="PlazoTesis"
            value="Es poco probable que logre finalizarla en el plazo previsto"
            checked={
              plazoTesis ===
              "Es poco probable que logre finalizarla en el plazo previsto"
            }
            onChange={(e) => setPlazoTesis(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}

export default TablaSeis;
