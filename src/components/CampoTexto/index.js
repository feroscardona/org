import "./CampoTexto.css"
const CampoTexto = (props)=>{
    const placeholderPuntos = `${props.placeholder}...`
    return (
        <div className="campo-texto">
            <label for="name">{props.titulo}</label>
            <input id="name" placeholder={placeholderPuntos}></input>
        </div>
        
    )
}

export default CampoTexto;