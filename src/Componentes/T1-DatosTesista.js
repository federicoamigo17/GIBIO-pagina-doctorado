import React, { useState } from "react";

function TablaUno() {
    const [tesistaNombre, setTesistaNombre] = useState("");
    const [tesistaLegajo, setTesistaLegajo] = useState("");
    const [anioAceptacion, setAnioAceptacion] = useState("");
    const [directoraNombre, setDirectoraNombre] = useState("");
    const [codirectoraNombre, setCodirectoraNombre] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); 
    };    

return (  
<div>
  <form onSubmit={handleSubmit}>
    <h3>Datos del/la tesista y sus Directores:</h3>
    <label>
      Nombre y apellido del/la Tesista:
      <input
        type="text"
        value={tesistaNombre}
        onChange={(e) => setTesistaNombre(e.target.value)}
      />
    </label>
    <br></br>
    <label>
      Legajo del/la Tesista:
      <input
        type="text"
        value={tesistaLegajo}
        onChange={(e) => setTesistaLegajo(e.target.value)}
      />
    </label>
    <br></br>
    <label>
      Año de aceptación en el Doctorado:
      <input
        type="text"
        value={anioAceptacion}
        onChange={(e) => setAnioAceptacion(e.target.value)}
      />
    </label>
    <br></br>
    <label>
      Nombre y apellido del/la Directora/a:
      <input
        type="text"
        value={directoraNombre}
        onChange={(e) => setDirectoraNombre(e.target.value)}
      />
    </label>
    <br></br>
    <label>
      Nombre y apellido del/la Co-Director/a:
      <input
        type="text"
        value={codirectoraNombre}
        onChange={(e) => setCodirectoraNombre(e.target.value)}
      />
    </label>
  </form>
</div>
);
}


export default TablaUno;