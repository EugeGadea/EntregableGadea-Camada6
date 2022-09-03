// El componente App es el padre de:
// - Cabedcera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

import React from "react";
import { useState } from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";

function App() {

  const [cant, setCant] = useState(0);

  const aumentarProducto = () => {
    setCant(cant+1)
  } 

  return (
    <div className="App">
      <Cabecera cantidad = {cant}/>
      <Listado aumentarProducto = {aumentarProducto}/>
    </div>
  );
}

export default App;
