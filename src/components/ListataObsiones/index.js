import "./ListaObsiones.css"
const ListaObsiones = (props)=>{

    const manejarCanbio = (evento)=>{
        props.actualizarValor(evento.target.value)
    }
    
    return(
        <div className="listaObsiones">
           <label >Equipos</label>
           <select value={props.valor} onChange={manejarCanbio}>
           <option value="" disabled defaultValue="" hidden>Selecionar equipo</option>
            {props.equipos.map((equipo, index)=>{
                return <option key={index}value={equipo}>{equipo}</option>
            })}
            </select> 
        </div>
    )
}

export default ListaObsiones