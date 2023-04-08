import "./Equipo.css"
const Equipo = (props) =>{
    //Destructuración
    const {colorPrimario,colorSecundario,titulo}= props.datos
    const ojb={
        backgroundColor: colorSecundario
    }
    return <section className="equipo" style={ojb}>
        <h3 style={{borderColor:colorPrimario}}>{titulo}</h3>
        <div className="colaboradores">

        </div>
    </section>
}

export default Equipo;