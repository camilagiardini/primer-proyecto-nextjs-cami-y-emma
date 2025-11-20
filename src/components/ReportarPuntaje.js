export default function ReportarPuntaje({ onChangePuntaje, onClickReportar }) {

    return (
        <div>
            <h3>Reportar Puntaje</h3>
            <input
                type="number"
                min="1"
                max="100"
                onChange={(e) => onChangePuntaje(e.target.value)}
            />
            <button onClick={onClickReportar}>Reportar</button>
        </div>
    )
}
