import { useState } from 'react';
import './App.css';
import Header from './components/header/index.js';
import Formulario from './components/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';
function App() {
  const [mostrarFormulario,estadoFormulario] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([])
  const cambiarMostar = ()=>{
    estadoFormulario(!mostrarFormulario)
  }
  //Registrar colaborador
  const registrarColaborador = (colaborador) =>{
    console.log("Nuevo colaborador:",colaborador)
    //spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }
  //Lista de Equipos
  const equipos = [
    {
      titulo:"Programación",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      titulo:"Front-End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      titulo:"Devobs",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      titulo:"Ux y Deseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      titulo:"Movil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      titulo:"Innovación y Gestion",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    },
]
  return (
    <div>
      <Header/>
      { mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo)=>equipo.titulo)}
        registrarColaborador={registrarColaborador}
        />
      }
     <MiOrg cambiarMostar={cambiarMostar}/>
     {
      equipos.map((equipo)=>
        <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador=>colaborador.equipo === equipo.titulo)}
        />
      )
     }
     <Footer/>
    </div>
  );
}

export default App;
