"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Inicio() {

    const [jugador, setJugador] = useState("")
    const [alumnoId, setAlumnoId] = useState("")
    const [error, setError] = useState(false)
    const router = useRouter()

    function irAlRanking() {
        if (jugador.length < 3) {
            setError(true)
            return
        }

        router.push(`/ranking?jugador=${jugador}&alumnoId=${alumnoId}`)
    }

    return (
        <>
            <h1>Página de Inicio</h1>

            <h3>Jugador</h3>
            <input type="text"
                onChange={(e) => { setJugador(e.target.value); setError(false) }} />

            {error && <p style={{ color: "red" }}>El nombre debe tener al menos 3 caracteres</p>}

            <h3>ID Alumno</h3>
            <input type="number" onChange={(e) => setAlumnoId(e.target.value)} />

            <button onClick={irAlRanking}>Ir al Ranking</button>
        </>
    )
}
