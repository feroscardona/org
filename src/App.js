import { useState } from 'react';
import './App.css';
import Header from './components/header/index.js';
import Formulario from './components/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';
import { v4 as uuid } from 'uuid';
function App() {
  const [mostrarFormulario,estadoFormulario] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
  {
    id:uuid(),
    equipo: "Front-End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav:false
  }, 
  {
    id:uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png", 
    nombre: "Genesys Rondón", 
    puesto: "Desarrolladora de software e instructora",
    fav:false
  },
  {
    id:uuid(),
    equipo: "UX y Deseño", 
    foto: "https://github.com/JeanmarieAluraLatam.png", 
    nombre: "Jeanmarie Quijada", 
    puesto: "Instructora en Alura Latam",
    fav:false
  },
  {
    id:uuid(),
    foto: "https://github.com/christianpva.png",
    equipo: "Programación",
    nombre: "Christian Velasco", 
    puesto: "Head de Alura e Instructor",
    fav:false
  },
  {
    id:uuid(),
    equipo: "Innovación y Gestion",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez", 
    puesto: "Dev FullStack",
    fav:false
  }
])
const [equipos, actualizarEquipos] = useState([
  {
    id:uuid(),
    titulo:"Programación",
    colorPrimario:"#57C278",
    colorSecundario:"#D9F7E9"
  },
  {
    id:uuid(),
    titulo:"Front-End",
    colorPrimario:"#82CFFA",
    colorSecundario:"#E8F8FF"
  },
  {
    id:uuid(),
    titulo:"Data Science",
    colorPrimario:"#A6D157",
    colorSecundario:"#F0F8E2"
  },
  {
    id:uuid(),
    titulo:"Devobs",
    colorPrimario:"#E06B69",
    colorSecundario:"#FDE7E8"
  },
  {
    id:uuid(),
    titulo:"UX y Deseño",
    colorPrimario:"#DB6EBF",
    colorSecundario:"#FAE9F5"
  },
  {
    id:uuid(),
    titulo:"Movil",
    colorPrimario:"#FFBA05",
    colorSecundario:"#FFF5D9"
  },
  {
    id:uuid(),
    titulo:"Innovación y Gestion",
    colorPrimario:"#FF8A29",
    colorSecundario:"#FFEEDF"
  },
])
  const cambiarMostar = ()=>{
    estadoFormulario(!mostrarFormulario)
  }
  //Registrar colaborador
  const registrarColaborador = (colaborador) =>{
    console.log("Nuevo colaborador:",colaborador)
    //spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }
  //Eliminar Colaborador
  const eliminarColaborador = (id)=>{
    console.log("eliminar")
    const nuevosColaboradores = colaboradores.filter((colaborador)=>colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }
  //Actualizar color de equipo
  const actualizarColor = (color, id)=>{
    console.log(color,id)
    const equiposAtualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposAtualizados)
  }
//Crea equipo
const creaEquipo = (nuevoEquipo)=>{
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos,{...nuevoEquipo,id:uuid()}])
}
const like = (id)=>{
  const colaboradoresActualizados = colaboradores.map((colaborador)=>{
    if(colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })
  actualizarColaboradores(colaboradoresActualizados)
}
  return (
    <div>
      <Header/>
      { mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo)=>equipo.titulo)}
        registrarColaborador={registrarColaborador}
        creaEquipo={creaEquipo}
        />
      }
     <MiOrg cambiarMostar={cambiarMostar}/>
     {
      equipos.map((equipo)=>
        <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador=>colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
      )
     }
     <Footer/>
    </div>
  );
}

export default App;
