import "./Formulario.css"
import CampoTexto from "../CampoTexto";
import ListaObsiones from "../ListataObsiones";
import Boton from "../Boton";
const Formulario = ()=>{
    const manejarEvento=(evento)=>{
        evento.preventDefault()
    }
    return(
        <section className="formulario">
            <form onSubmit={manejarEvento}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required={true}/>
                <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required/>
                <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required/>
                <ListaObsiones/>
                <Boton>
                    Crear
                </Boton>
            </form>
        </section>
    )
}
export default Formulario;