import { useState } from "react";
import "./Formulario.css"
import CampoTexto from "../CampoTexto";
import ListaObsiones from "../ListataObsiones";
import Boton from "../Boton";
const Formulario = (props)=>{

    const [nombre,actualizarNombre]= useState("");
    const [puesto,actualizarPuesto]= useState("");
    const [foto,actualizarFoto]= useState("");
    const[equipo, actualizarEquipo]= useState("");
    const manejarEvento=(evento)=>{
        evento.preventDefault()
        let datosEnviados = {
            nombre:nombre,
            puesto:puesto,
            foto:foto,
            equipo:equipo
        }
        console.log(datosEnviados)
    }
    
    return(
        <section className="formulario">
            <form onSubmit={manejarEvento}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto 
                    titulo="Nombre"
                     placeholder="Ingresar nombre" 
                     required={true} 
                     valor={nombre} 
                     actualizarValor={actualizarNombre}
                />
                <CampoTexto 
                    titulo="Puesto" 
                    placeholder="Ingresar 
                    puesto" required
                    valor={puesto} 
                    actualizarValor={actualizarPuesto}
                />
                <CampoTexto 
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
        </section>
    )
}
export default Formulario;