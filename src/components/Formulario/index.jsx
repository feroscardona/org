import { useState } from "react";
import "./Formulario.css"
import Campo from "../Campo";
import ListaObsiones from "../ListataObsiones";
import Boton from "../Boton";
const Formulario = (props)=>{

    const [nombre,actualizarNombre]= useState("");
    const [puesto,actualizarPuesto]= useState("");
    const [foto,actualizarFoto]= useState("");
    const[equipo, actualizarEquipo]= useState("");
    const[titulo, actualizarTitulo]= useState("");
    const[color, actualizarColor]= useState("");

    const {registrarColaborador,creaEquipo}= props
    const manejarEvento=(evento)=>{
        evento.preventDefault()
        let datosEnviados = {
            nombre:nombre,
            puesto:puesto,
            foto:foto,
            equipo:equipo
        }
        registrarColaborador(datosEnviados)
    }
    const manejarNuevoEquipo = (e)=>{
        e.preventDefault()
        creaEquipo({titulo,colorPrimario:color})
    }
    
    return(
        <section className="formulario">
            <form onSubmit={manejarEvento}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo 
                    titulo="Nombre"
                     placeholder="Ingresar nombre" 
                     required={true} 
                     valor={nombre} 
                     actualizarValor={actualizarNombre}
                />
                <Campo 
                    titulo="Puesto" 
                    placeholder="Ingresar 
                    puesto" required
                    valor={puesto} 
                    actualizarValor={actualizarPuesto}
                />
                <Campo 
                    titulo="Foto" 
                    placeholder="Ingresar enlace de foto" 
                    required
                    valor={foto} 
                    actualizarValor={actualizarFoto}
                />
                <ListaObsiones 
                    valor={equipo} 
                    actualizarValor={actualizarEquipo}
                    equipos={props.equipos}
                />
                <Boton>
                    Crear
                </Boton>
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el equipo.</h2>
                <Campo 
                    titulo="Titulo"
                     placeholder="Ingresar titulo" 
                     required={true} 
                     valor={titulo} 
                     actualizarValor={actualizarTitulo}
                />
                <Campo 
                    titulo="Color" 
                    placeholder="Ingresar 
                    el color en Hex" required
                    valor={color} 
                    actualizarValor={actualizarColor}
                    type="color"
                />
                <Boton>
                    Registrar Equipo
                </Boton>
            </form>    
        </section>
    )
}
export default Formulario;