"use client"
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { useSocket } from "@/hooks/useSocket"
import JugadorRanking from "@/components/JugadorRanking"
import ReportarPuntaje from "@/components/ReportarPuntaje"

export default function Ranking() {

    const searchParams = useSearchParams()
    const jugador = searchParams.get("jugador")
    const alumnoId = searchParams.get("alumnoId")

    const { socket } = useSocket()

    const [ranking, setRanking] = useState(null)
    const [puntajeNuevo, setPuntajeNuevo] = useState("")
    const [mensaje, setMensaje] = useState("")

    const [topTres, setTopTres] = useState([])

    useEffect(() => {
        if (ranking) {
            const ordenado = [...ranking.jugadores].sort((a, b) => b.puntaje - a.puntaje)
            setTopTres(ordenado.slice(0, 3))
        }
    }, [ranking])


    useEffect(() => {
        if (!socket) return

        socket.on("joined_OK_ranking", (data) => {
            setRanking(data)
            setMensaje("")
        })

        socket.on("ranking_actualizado", (data) => {
            setRanking(data)
        })

        socket.on("ranking_completo", (data) => {
            setRanking(data)
            setMensaje("¡Ranking completo! Se reportaron 8 puntajes.")
        })

        return () => {
            socket.off("joined_OK_ranking")
            socket.off("ranking_actualizado")
            socket.off("ranking_completo")
        }
    }, [socket])

    function unirse() {
        socket.emit("join_ranking", { alumnoId })
    }

    function reportar() {
        const puntaje = Number(puntajeNuevo)

        if (puntaje < 1 || puntaje > 100) {
            alert("El puntaje debe estar entre 1 y 100")
            return
        }

        socket.emit("reportar_puntaje", {
            jugador,
            puntaje
        })
    }

    return (
        <>
            <h1>Ranking</h1>

            <p>Número de sala: {alumnoId}</p>

            <button onClick={unirse}>Unirse al Ranking</button>

            {ranking && ranking.jugadores.map((j, index) => (
                <JugadorRanking
                    key={index}
                    posicion={j.posicion}
                    jugador={j.jugador}
                    puntaje={j.puntaje}
                />
            ))}

            <ReportarPuntaje
                onChangePuntaje={setPuntajeNuevo}
                onClickReportar={reportar}
            />

            {ranking && <p>Promedio general: {ranking.promedioGeneral}</p>}

            {mensaje && <p>{mensaje}</p>}
            <h2>Top 3</h2>

            {topTres.length === 0 ? (
                <p>No hay puntajes reportados aún.</p>
            ) : (
                topTres.map((p, i) => (
                    <div key={i}>
                        <p>{i + 1}° - {p.jugador} ({p.puntaje})</p>
                    </div>
                ))
            )}

            {ranking && (
                <>
                    <p>Puntaje más alto: {Math.max(...ranking.jugadores.map(j => j.puntaje))}</p>
                    <p>Puntaje más bajo: {Math.min(...ranking.jugadores.map(j => j.puntaje))}</p>
                    <p>Total de puntajes: {ranking.cantidadPuntajes}</p>
                </>
            )}


        </>
    )
}
