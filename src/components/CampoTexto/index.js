import "./CampoTexto.css"
const CampoTexto = (props)=>{
    const placeholderPuntos = `${props.placeholder}...`
    
    
    const manejarCanbio = (evento)=>{
            props.actualizarValor(evento.target.value)
    }
    return (
        <div className="campo-texto">
            <label >{props.titulo}</label>
            <input  placeholder={placeholderPuntos}
                    required={props.required}
                    value={props.valor}
                    onChange={manejarCanbio}>

            </input>
        </div>
        
    )
}
export default CampoTexto;