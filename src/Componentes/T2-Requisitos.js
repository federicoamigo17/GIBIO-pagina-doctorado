import React, { useState } from "react";

function TablaDos() {
  const [creditosReconocidos, setCreditosReconocidos] = useState("");
  const [pruebaIdioma, setPruebaIdioma] = useState("");
  const [requisitoRequisito, setRequisitoRequisito] = useState(false);
  const [requisitoArticulo, setRequisitoArticulo] = useState(false);
  const [requisitoTransferencia, setRequisitoTransferencia] = useState(false);
  const [requisitoPatente, setRequisitoPatente] = useState(false);
  const [reconocidoRectorado, setReconocidoRectorado] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Requisitos de graduación:</h3>
        <label>
          Número de créditos reconocidos por Rectorado:
          <input
            type="text"
            value={creditosReconocidos}
            onChange={(e) => setCreditosReconocidos(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Aprobó la prueba de suficiencia de idioma inglés? (indique SI o NO):
          <input
            type="text"
            value={pruebaIdioma}
            onChange={(e) => setPruebaIdioma(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          ¿Cumple con alguno de estos requisitos?
          <input
            type="checkbox"
            checked={requisitoRequisito}
            onChange={(e) => setRequisitoRequisito(e.target.checked)}
          />
        </label>
        <br></br>
        <label>
          Haber publicado al menos UN (1) artículo producto de la tesis en una
          revista indexada como autor/a principal.
          <input
            type="checkbox"
            checked={requisitoArticulo}
            onChange={(e) => setRequisitoArticulo(e.target.checked)}
          />
        </label>
        <br></br>
        <label>
          Haber realizado transferencia de tecnología original, con relación
          directa con el tema de tesis, con un nivel de maduración tecnológica
          TRL 6 o superior.
          <input
            type="checkbox"
            checked={requisitoTransferencia}
            onChange={(e) => setRequisitoTransferencia(e.target.checked)}
          />
        </label>
        <br></br>
        <label>
          Participar con rol de inventor/a en una patente otorgada de un
          producto de la tesis.
          <input
            type="checkbox"
            checked={requisitoPatente}
            onChange={(e) => setRequisitoPatente(e.target.checked)}
          />
        </label>
        <br></br>
        <label>
          En caso de que haya cumplido con alguno de los requisitos, indicar si
          ya fue reconocido por Rectorado:
          <input
            type="text"
            value={reconocidoRectorado}
            onChange={(e) => setReconocidoRectorado(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}

export default TablaDos;
