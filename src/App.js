import React from "react";
import TablaUno from "./Componentes/T1-DatosTesista";
import TablaDos from "./Componentes/T2-Requisitos";
import TablaTres from "./Componentes/T3-(1)";
import TablaCuatro from "./Componentes/T4-(2)";
import TablaCinco from "./Componentes/T5-(3)";
import TablaSeis from "./Componentes/T6-(4)";

function App() {
  return (
    <>
      <div>
        <h1>Planilla Informe Avance</h1>
        <h2>DOCTORADO EN INGENIERIA</h2>
        <h3>Informe anual del director</h3>
      </div>
      <div>
        <TablaUno />
        <TablaDos />
        <TablaTres />
        <TablaCuatro />
        <TablaCinco />
        <TablaSeis />
      </div>
    </>
  );
}

export default App;
