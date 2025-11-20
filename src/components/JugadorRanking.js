export default function JugadorRanking({ posicion, jugador, puntaje }) {

    return (
        <div>
            {posicion === 1 && <h3>Primer Lugar</h3>}
            {posicion === 2 && <h3>Segundo Lugar</h3>}
            {posicion === 3 && <h3>Tercer Lugar</h3>}
            {posicion > 3 && <h3>Posición {posicion}</h3>}

            <p>Jugador: {jugador}</p>
            <p>Puntaje: {puntaje}</p>
        </div>
    )
}
