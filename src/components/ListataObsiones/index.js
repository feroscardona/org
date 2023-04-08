import "./ListaObsiones.css"
const ListaObsiones = (props)=>{
    const equipos = [
        "Programación",
        "Front-End",
        "Data Science",
        "Devobs",
        "UX y Diseño",
        "Movil",
        "Innovacion y Gestión"
    ]
    const manejarCanbio = (evento)=>{
        props.actualizarValor(evento.target.value)
    }
    
    return(
        <div className="listaObsiones">
           <label >Equipos</label>
           <select value={props.valor} onChange={manejarCanbio}>
           <option value="" disabled defaultValue="" hidden>Selecionar equipo</option>
            {equipos.map((equipo, index)=>{
                return <option key={index}>{equipo} value={equipo}</option>
            })}
            </select> 
        </div>
    )
}

export default ListaObsiones