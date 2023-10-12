import React from 'react';
import TablaUno from './Componentes/T1-DatosTesista';
import TablaDos from './Componentes/T2-Requisitos';
import TablaTres from './Componentes/T3-(1)';
import TablaCuatro from './Componentes/T4-(2)';

function App() {
  return (
    <><div>
      <h1>Planilla Informe Avance</h1>
      <h2>DOCTORADO EN INGENIERIA</h2>
      <h3>Informe anual del director</h3>
    </div><div>
        <TablaUno />
        <TablaDos />
        <TablaTres />
        <TablaCuatro />
      </div></>
  );
}

export default App;

