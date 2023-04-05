import "./ListaObsiones.css"
const ListaObsiones = ()=>{
    const equipos = [
        "Programación",
        "Front-End",
        "Data Science",
        "Devobs",
        "UX y Diseño",
        "Movil",
        "Innovacion y Gestión"
    ]
    
    return(
        <div className="listaObsiones">
           <label >Equipos</label>
           <select>
            {equipos.map((equipo, index)=>{
                return <option key={index}>{equipo}</option>
            })}
            </select> 
        </div>
    )
}

export default ListaObsiones