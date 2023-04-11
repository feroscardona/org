import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';
const Equipo = (props) =>{
    //Destructuración
    const {colorPrimario,colorSecundario,titulo,id}= props.datos
    const {colaboradores, eliminarColaborador, actualizarColor}=props
    const ojb = {backgroundColor:hexToRgba(colorPrimario,0.4)}
    
    return <>
        { 
            colaboradores.length > 0 &&
            <section className="equipo" style={ojb}>
                <input 
                    type="color" 
                    className="input-color"
                    value={colorPrimario}
                    onChange={(evento)=>{
                        actualizarColor(evento.target.value,id)
                    }}
                />
                <h3 style={{borderColor:colorPrimario}}>{titulo}</h3>
                <div className="colaboradores">
                
                {
                    colaboradores.map((colaborador,index)=>
                        <Colaborador 
                            datos={colaborador} 
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                        />
                    )
                }
                </div>
            </section>
        }
    </>
}

export default Equipo;