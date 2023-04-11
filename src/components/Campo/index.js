import "./Campo.css"
const Campo = (props)=>{
    const placeholderPuntos = `${props.placeholder}...`
    const {type = "text"} = props
    
    const manejarCanbio = (evento)=>{
            props.actualizarValor(evento.target.value)
    }
    return (
        <div className={`campo campo-${type}`}>
            <label >{props.titulo}</label>
            <input  placeholder={placeholderPuntos}
                    required={props.required}
                    value={props.valor}
                    onChange={manejarCanbio}
                    type={type}
                >

            </input>
        </div>
        
    )
}
export default Campo;