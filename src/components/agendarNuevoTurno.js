export default function AgendarNuevoTurno({ onChangeNumeroTurno, onClickReservarTurno }) {
    return (
        <>
            <title>Agendar nuevo turno</title>
            <input type="number" onChange={
                (event) => onChangeNumeroTurno(event.target.value)
            }></input>
            <button onClick={onClickReservarTurno}>Reservar turno</button>
        </>
    )
}