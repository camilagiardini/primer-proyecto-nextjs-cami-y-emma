export default function Turno(props) {
    return(
        <>
            <h1>Turno</h1>
            <p>Especialidad: {props.especialidad}</p>
            <p>Turno actual: {props.turnoActual}</p>
            <p>Cantidad de reservas: {props.cantidadReservas}</p>
            <p>Paciente actual: {props.pacienteActual}</p>
        </>
    )
}