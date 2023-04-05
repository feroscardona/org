import { useState } from 'react';
import './App.css';
import Header from './components/header/index.js';
import Formulario from './components/Formulario';
import MiOrg from './components/MiOrg';
function App() {
  const [mostrarFormulario,estadoFormulario] = useState(false)
  const cambiarMostar = ()=>{
    estadoFormulario(!mostrarFormulario)
  }
  return (
    <div>
      <Header/>
      { mostrarFormulario && <Formulario />}
     <MiOrg cambiarMostar={cambiarMostar}/>
    </div>
  );
}

export default App;
