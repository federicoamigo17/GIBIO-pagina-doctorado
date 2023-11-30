import React from "react";
import Header from "./Componentes/Header";
import Menu from "./Componentes/Menu";
import Titulo from "./Componentes/Titulo";
import TablaUno from "./Componentes/T1-DatosTesista";
import TablaDos from "./Componentes/T2-Requisitos";
import TablaTres from "./Componentes/T3-(1)";
import TablaCuatro from "./Componentes/T4-(2)";
import TablaCinco from "./Componentes/T5-(3)";
import TablaSeis from "./Componentes/T6-(4)";
import TablaSiete from "./Componentes/T7-(5)";
import PdfGenerator from "./GeneradorPDF";

function App() {
  return (
    <>
    <Header />
  
    <Titulo />
      <div>
        <TablaUno />
        <TablaDos />
        <TablaTres />
        <TablaCuatro />
        <TablaCinco />
        <TablaSeis />
        <TablaSiete />
        <Menu />
      </div>
    </>
  );
}

export default App;
